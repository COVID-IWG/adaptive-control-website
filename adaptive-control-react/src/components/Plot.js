import React from "react";
import SVG from 'react-inlinesvg';
import {LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid, ResponsiveContainer} from "recharts";


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
        this.svgRef = React.createRef();  
        this.state = { data: null };
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
                            "deceased":  total["deceased"]  || 0
                        })
                    })
                    flattened[state] = ts
                })
            this.setState({ data: flattened })
        });
    }

    
    render() {
        const plotKey  = "plot_" + this.props.geography

        if (this.props.viztype.startsWith("map")) {
            return <SVG  
                innerRef={this.svgRef}
                key={plotKey} 
                src={require("./data/" + this.props.geography +"_" + this.props.viztype + ".svg")}
                onError={(e) => console.log(e)}
            />
        }
        if (this.state.data === null)
            return <p>l o a d i n g . . .</p>
        var geography = (this.props.geography === "IN") ? "TT" : this.props.geography;
        var data = this.state.data[geography]
        return <>
        <ResponsiveContainer width="95%" height="80%">
        <LineChart data={data} margin={{left: 20, right: 20, bottom: 20, top: 20}}>
            <CartesianGrid /> 
            {/* strokeDasharray="3 3" /> */}
            <XAxis dataKey="date" tick={{fontFamily: 'Fira Code'}}/>
            <YAxis tick={{fontFamily: 'Fira Code'}}/>
            <Tooltip />
            <Line type="natural" dataKey={this.props.viztype.replace("chart_", "")} stroke="#343a40" dot={false} activeDot={{ r: 4 }} />
        </LineChart>
        </ResponsiveContainer> 
        </>
    }
}

export default Plot;