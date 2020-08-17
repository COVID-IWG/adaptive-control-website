import React from "react";
import {XAxis, YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer, Area, ComposedChart, ReferenceLine, Label} from "recharts";
import moment from 'moment'

// const pop_list = {"AN": 0.397, "AP": 52.221, "AR": 1.504, "AS": 34.293, "BR": 119.52, "CH": 1.179, "CT": 28.724,
// "DN": 0.959, "DL": 19.814, "GA": 1.54, "GJ": 67.936, "HR": 28.672, "HP": 7.3, "JK": 13.203, "JH": 37.403, "KA": 65.798,
// "KL": 35.125, "LA": 0.293, "LD": 0.064, "MP": 82.232, "MH": 122.153, "MN": 3.103, "ML": 3.224, "MZ": 1.192, "NL": 2.15,
// "OR": 43.671, "PY": 1.504, "PB": 29.859, "RJ": 77.264, "SK": 0.664, "TN": 75.695, "TG": 37.22, "TR": 3.992, "UP": 224.979,
// "UT": 11.141, "WB": 96.906, "TT": 1332.83};

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
            data: null
        };
      }
     
    componentDidMount() {
        fetch("https://spreadsheets.google.com/feeds/list/17sDFb2DwplJX8A7bRdYvlEJdhRgsVpE44nQpNKWR6jM/1/public/full?alt=json")
            .then(response => response.json())
            .then(data => {
                var grouped = data.feed.entry.reduce(
                    (entryMap, e) => entryMap.set(e.gsx$state.$t, [...entryMap.get(e.gsx$state.$t)||[], {
                        "date": e.gsx$date.$t,
                        "Rt": e.gsx$rt.$t,
                        "CI": [e.gsx$rtlower.$t, e.gsx$rtupper.$t],
                        "cases": e.gsx$cases.$t,
                        "total_cases": e.gsx$total_cases.$t,
                        "recovered": e.gsx$recovered.$t,
                        "total_recovered": e.gsx$total_recovered.$t,
                        "deceased": e.gsx$deceased.$t,
                        "total_deceased": e.gsx$total_deceased.$t,
                        "tested": e.gsx$tested.$t,
                        "total_tested": e.gsx$total_tested.$t,
                        "cfr": e.gsx$cfr.$t,
                        "total_cfr": e.gsx$total_cfr.$t,
                        "active": e.gsx$active.$t,
                        "total_active": e.gsx$total_active.$t,
                        "active_per_mn": e.gsx$active_per_mn.$t,
                        "total_active_per_mn": e.gsx$total_active_per_mn.$t,
                        "recovery_rate": e.gsx$recovery_rate.$t,
                        "total_recovery_rate": e.gsx$total_recovery_rate.$t,
                        "infection_rate": e.gsx$infection_rate.$t,
                        "total_infection_rate": e.gsx$total_infection_rate.$t
                    }]),
                    new Map()
                );
                this.setState({ data: grouped })
            });
    }

    render() { 
        if (this.state.data === null)
            return <p>l o a d i n g . . .</p>
        var geography = (this.props.geography === "IN") ? "TT" : this.props.geography;
        var vizType = this.props.vizType.replace("chart_", "")
        var data = this.state.data[geography];
        return <>
        <ResponsiveContainer>
        <ComposedChart data={data} margin={{top: 5, right: 50, left: 50, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={timestr => moment(timestr).format('MMM DD')}/>
            <YAxis/>
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