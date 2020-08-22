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
    "CH": "Chandigarh",
    "AR": "Arunachal Pradesh",
    "AP": "Andhra Pradesh",
    "AS": "Assam",
    "BR": "Bihar",
    "CT": "Chhattisgarh",
    "DL": "Delhi",
    "GA": "Goa",
    "GJ": "Gujarat",
    "HR": "Haryana",
    "HP": "Himachal Pradesh",
    "JK": "Jammu and Kashmir",
    "JH": "Jharkhand",
    "KA": "Karnataka",
    "KL": "Kerala",
    "MP": "Madhya Pradesh",
    "MH": "Maharashtra",
    "MN": "Manipur",
    "ML": "Meghalaya",
    "OR": "Odisha",
    "PB": "Punjab",
    "RJ": "Rajasthan",
    // "SK": "Sikkim",
    "TN": "Tamil Nadu",
    "TG": "Telangana",
    "TR": "Tripura",
    "UP": "Uttar Pradesh",
    "UT": "Uttarakhand",
    "WB": "West Bengal",
}

const ymax = { 
    "Rt" : 4,
    "cfr": 0.2,
    "recoveryrate": 0.01
}

class Plot extends React.Component { 
    constructor(props) {
        super(props);
        this.state = { 
            data: null
        };
      }
     
    componentDidMount() {
        fetch("https://spreadsheets.google.com/feeds/list/17sDFb2DwplJX8A7bRdYvlEJdhRgsVpE44nQpNKWR6jM/2/public/full?alt=json")
            .then(response => response.json())
            .then(data => {
                var grouped = data.feed.entry.reduce(
                    (entryMap, e) => entryMap.set(e.gsx$state.$t, [...entryMap.get(e.gsx$state.$t)||[], {
                        "date": e.gsx$date.$t,
                        "Rt": parseFloat(e.gsx$rt.$t),
                        "CI": [parseFloat(e.gsx$rtlower.$t), parseFloat(e.gsx$rtupper.$t)],
                        "confirmed": parseFloat(e.gsx$cases.$t),
                        "total_confirmed": parseFloat(e.gsx$totalcases.$t),
                        "recovered": parseFloat(e.gsx$recovered.$t),
                        "total_recovered": parseFloat(e.gsx$totalrecovered.$t),
                        "deceased": parseFloat(e.gsx$deceased.$t),
                        "total_deceased": parseFloat(e.gsx$totaldeceased.$t),
                        "tested": parseFloat(e.gsx$tested.$t),
                        "total_tested": parseFloat(e.gsx$totaltested.$t),
                        "cfr": parseFloat(e.gsx$cfr.$t),
                        "total_cfr": parseFloat(e.gsx$totalcfr.$t),
                        "active": parseFloat(e.gsx$active.$t),
                        "total_active": parseFloat(e.gsx$totalactive.$t),
                        "active_per_mn": parseFloat(e.gsx$activepermn.$t),
                        "total_active_per_mn": parseFloat(e.gsx$totalactivepermn.$t),
                        "recovery_rate": parseFloat(e.gsx$recoveryrate.$t),
                        "total_recovery_rate": parseFloat(e.gsx$totalrecoveryrate.$t),
                        "infection_rate": parseFloat(e.gsx$infectionrate.$t),
                        "total_infection_rate": parseFloat(e.gsx$totalinfectionrate.$t)
                    }]),
                    new Map()
                );
                this.setState({ data: grouped })
            });
    }

    render() { 
        if (this.state.data === null)
            return <p>l o a d i n g . . .</p>
        var vizType = this.props.vizType.replace("chart_", "")
        var geography = this.props.geography
        var data = this.state.data.get(geography);
        var ym = ymax[vizType] || 'dataMax'
        return <>
        <ResponsiveContainer>
        <ComposedChart data={data} margin={{top: 5, right: 50, left: 50, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tickFormatter={timestr => moment(timestr).format('MMM DD')} tick={{ fontFamily: 'Fira Code' }} interval={31}/>
            <YAxis tick={{ fontFamily: 'Fira Code' }} domain={[0, ym]} allowDataOverflow={false}/>
            <Tooltip />
            <Line type="monotone" dataKey={vizType} stroke="#354052" activeDot={{ r: 4 }} dot={false}/>
            {vizType === "Rt" ? <Area type="monotone" dataKey="CI" fill="#354052" stroke="#8884d8" opacity="0.3"/> : ""}
            {vizType === "Rt" ? <ReferenceLine y={1} stroke="#8884d8">
                <Label value={"CRITICAL"} position="left" />
            </ReferenceLine> : ""}
        </ComposedChart>
        </ResponsiveContainer>
        </>
    }
}

export default Plot;