import React from "react";
import {XAxis, YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer, Area, ComposedChart, ReferenceLine, Label} from "recharts";
import moment from 'moment'

export const state_codes = {
    // "AN": "Andaman and Nicobar Islands",
    // "CH": "Chandigarh",
    // "AR": "Arunachal Pradesh",
    "AP": "Andhra Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    // "CT": "Chhattisgarh",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    // "HP": "Himachal Pradesh",
    // "JK": "Jammu and Kashmir",
    // "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "OR": "Odisha",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    // "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarakhand",
    "WB": "West Bengal",
}

class Plot extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { 
            c19in_data: null,
            rt_data: null
        };
      }
     
    componentDidMount() {
        fetch('https://api.covid19india.org/v3/timeseries.json')
            .then(response => response.json())
            .then(data => {
                var flattened = {}  
                Object.keys(data).forEach((state, _) => {
                    var ts = []
                    Object.keys(data[state]).forEach((date, _) => {
                        var total = data[state][date]["total"] || {}
                        ts.push({
                            "date": date, 
                            "confirmed": total["confirmed"] || 0,
                            "recovered": total["recovered"] || 0,
                            "tested":    total["tested"]    || 0,
                            "active":    total["active"]    || 0,
                            "deceased":  total["deceased"]  || 0
                        })
                    })
                    flattened[state] = ts
                })
            this.setState({ c19in_data: flattened })
        });
        fetch("https://spreadsheets.google.com/feeds/list/17sDFb2DwplJX8A7bRdYvlEJdhRgsVpE44nQpNKWR6jM/1/public/full?alt=json")
            .then(response => response.json())
            .then(data => {
                var grouped = data.feed.entry.reduce(
                    (entryMap, e) => entryMap.set(e.gsx$state.$t, [...entryMap.get(e.gsx$state.$t)||[], {
                        "date": e.gsx$date.$t, 
                        "Rt": e.gsx$rt.$t,
                        "CI": [e.gsx$rtlower.$t, e.gsx$rtupper.$t]
                    }]),
                    new Map()
                );
                this.setState({ rt_data: grouped })
            });
    }

    render() { 
        if (this.state.c19in_data === null || this.state.rt_data === null)
            return <p>l o a d i n g . . .</p>
        var geography = (this.props.geography === "IN") ? "TT" : this.props.geography;
        var vizType = this.props.vizType.split("_")[1]
        var data = vizType === "Rt" ? this.state.rt_data.get(geography) : this.state.c19in_data[geography];
        return <>
        <ResponsiveContainer>
        <ComposedChart data={data} margin={{top: 5, right: 50, left: 50, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={timestr => moment(timestr).format('MMM DD')}/>
            <YAxis domain={[0, 6]}/>
            <Tooltip />
            <Line type="monotone" dataKey={vizType} stroke="#354052" activeDot={{ r: 4 }} dot={false}/>
            <Area type="monotone" dataKey="CI" fill="#354052" stroke="#8884d8" opacity="0.3"/>
            <ReferenceLine y={vizType === "Rt" ? 1 : 0} stroke="#8884d8" opacity={vizType === "Rt" ? 1.0 : 0.0}>
            <Label value={vizType === "Rt" ? "CRITICAL" : ""} position="left" />
            </ReferenceLine>
        </ComposedChart>
        </ResponsiveContainer>
        </>
    }
}

export default Plot;