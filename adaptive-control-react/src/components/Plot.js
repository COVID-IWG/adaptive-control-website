import React from "react";
import {XAxis, YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer, Area, ComposedChart, ReferenceLine, Label} from "recharts";
import moment from 'moment'

// FORGIVE ME 
import TT_map_Rt from '../assets/Rt/TT_map_Rt.svg'
import AP_map_Rt from '../assets/Rt/AP_map_Rt.svg'
import AS_map_Rt from '../assets/Rt/AS_map_Rt.svg'
import BR_map_Rt from '../assets/Rt/BR_map_Rt.svg'
import CH_map_Rt from '../assets/Rt/CH_map_Rt.svg'
import CT_map_Rt from '../assets/Rt/CT_map_Rt.svg'
import DL_map_Rt from '../assets/Rt/DL_map_Rt.svg'
import GA_map_Rt from '../assets/Rt/GA_map_Rt.svg'
import GJ_map_Rt from '../assets/Rt/GJ_map_Rt.svg'
import HP_map_Rt from '../assets/Rt/HP_map_Rt.svg'
import HR_map_Rt from '../assets/Rt/HR_map_Rt.svg'
import JH_map_Rt from '../assets/Rt/JH_map_Rt.svg'
import KA_map_Rt from '../assets/Rt/KA_map_Rt.svg'
import KL_map_Rt from '../assets/Rt/KL_map_Rt.svg'
import MH_map_Rt from '../assets/Rt/MH_map_Rt.svg'
import ML_map_Rt from '../assets/Rt/ML_map_Rt.svg'
import MN_map_Rt from '../assets/Rt/MN_map_Rt.svg'
import MP_map_Rt from '../assets/Rt/MP_map_Rt.svg'
import NA_map_Rt from '../assets/Rt/NA_map_Rt.svg'
import OR_map_Rt from '../assets/Rt/OR_map_Rt.svg'
import PB_map_Rt from '../assets/Rt/PB_map_Rt.svg'
import RJ_map_Rt from '../assets/Rt/RJ_map_Rt.svg'
import SK_map_Rt from '../assets/Rt/SK_map_Rt.svg'
import TG_map_Rt from '../assets/Rt/TG_map_Rt.svg'
import TN_map_Rt from '../assets/Rt/TN_map_Rt.svg'
import TR_map_Rt from '../assets/Rt/TR_map_Rt.svg'
import UP_map_Rt from '../assets/Rt/UP_map_Rt.svg'
import UT_map_Rt from '../assets/Rt/UT_map_Rt.svg'
import WB_map_Rt from '../assets/Rt/WB_map_Rt.svg'

import TT_map_status from '../assets/status/TT_map_status.svg'
import AP_map_status from '../assets/status/AP_map_status.svg'
import AS_map_status from '../assets/status/AS_map_status.svg'
import BR_map_status from '../assets/status/BR_map_status.svg'
import CH_map_status from '../assets/status/CH_map_status.svg'
import CT_map_status from '../assets/status/CT_map_status.svg'
import DL_map_status from '../assets/status/DL_map_status.svg'
import GA_map_status from '../assets/status/GA_map_status.svg'
import GJ_map_status from '../assets/status/GJ_map_status.svg'
import HP_map_status from '../assets/status/HP_map_status.svg'
import HR_map_status from '../assets/status/HR_map_status.svg'
import JH_map_status from '../assets/status/JH_map_status.svg'
import KA_map_status from '../assets/status/KA_map_status.svg'
import KL_map_status from '../assets/status/KL_map_status.svg'
import MH_map_status from '../assets/status/MH_map_status.svg'
import ML_map_status from '../assets/status/ML_map_status.svg'
import MN_map_status from '../assets/status/MN_map_status.svg'
import MP_map_status from '../assets/status/MP_map_status.svg'
import NA_map_status from '../assets/status/NA_map_status.svg'
import OR_map_status from '../assets/status/OR_map_status.svg'
import PB_map_status from '../assets/status/PB_map_status.svg'
import RJ_map_status from '../assets/status/RJ_map_status.svg'
import SK_map_status from '../assets/status/SK_map_status.svg'
import TG_map_status from '../assets/status/TG_map_status.svg'
import TN_map_status from '../assets/status/TN_map_status.svg'
import TR_map_status from '../assets/status/TR_map_status.svg'
import UP_map_status from '../assets/status/UP_map_status.svg'
import UT_map_status from '../assets/status/UT_map_status.svg'
import WB_map_status from '../assets/status/WB_map_status.svg'

const mapImages = { 
    "Rt": {
        "TT": TT_map_Rt,
        "AP": AP_map_Rt,
        "AS": AS_map_Rt,
        "BR": BR_map_Rt,
        "CH": CH_map_Rt,
        "CT": CT_map_Rt,
        "DL": DL_map_Rt,
        "GA": GA_map_Rt,
        "GJ": GJ_map_Rt,
        "HP": HP_map_Rt,
        "HR": HR_map_Rt,
        "JH": JH_map_Rt,
        "KA": KA_map_Rt,
        "KL": KL_map_Rt,
        "MH": MH_map_Rt,
        "ML": ML_map_Rt,
        "MN": MN_map_Rt,
        "MP": MP_map_Rt,
        "NA": NA_map_Rt,
        "OR": OR_map_Rt,
        "PB": PB_map_Rt,
        "RJ": RJ_map_Rt,
        "SK": SK_map_Rt,
        "TG": TG_map_Rt,
        "TN": TN_map_Rt,
        "TR": TR_map_Rt,
        "UP": UP_map_Rt,
        "UT": UT_map_Rt,
        "WB": WB_map_Rt
    }, 

    "status": { 
        "TT": TT_map_status,
        "AP": AP_map_status,
        "AS": AS_map_status,
        "BR": BR_map_status,
        "CH": CH_map_status,
        "CT": CT_map_status,
        "DL": DL_map_status,
        "GA": GA_map_status,
        "GJ": GJ_map_status,
        "HP": HP_map_status,
        "HR": HR_map_status,
        "JH": JH_map_status,
        "KA": KA_map_status,
        "KL": KL_map_status,
        "MH": MH_map_status,
        "ML": ML_map_status,
        "MN": MN_map_status,
        "MP": MP_map_status,
        "NA": NA_map_status,
        "OR": OR_map_status,
        "PB": PB_map_status,
        "RJ": RJ_map_status,
        "SK": SK_map_status,
        "TG": TG_map_status,
        "TN": TN_map_status,
        "TR": TR_map_status,
        "UP": UP_map_status,
        "UT": UT_map_status,
        "WB": WB_map_status
    }
}

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
        var geography = this.props.geography
        if (this.props.vizType.startsWith("map")) {
            var mapType  = this.props.vizType.replace("map_", "");
            console.log(mapType)
            console.log(geography)
            console.log(mapImages[mapType])
            return <>
                <img src = {mapImages[mapType][geography]} alt = {"map"}></img>
            </>
        }
        var vizType = this.props.vizType.replace("chart_", "")
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