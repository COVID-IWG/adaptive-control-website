import React from "react";
import {LineChart, XAxis, YAxis, Tooltip, Legend, Line, CartesianGrid, ResponsiveContainer} from "recharts";

class Chart extends React.Component { 
    constructor(props) {
        super(props);
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
                            "active":    total["active"]    || 0,
                            "deceased":  total["deceased"]  || 0
                        })
                    })
                    flattened[state] = ts
                })
            this.setState({ data: flattened })
        });
    }

    render() { 
        console.log("rendering chart")
        if (this.state.data === null)
            return <p>l o a d i n g . . .</p>
        var geography = (this.props.geography === "IN") ? "TT" : this.props.geography;
        // var key = "chart_" + geography + "_" + this.props.viztype
        var data = this.state.data[geography]
        return <>
        <div>blorp geo={geography} viz={this.props.viztype}</div>
        <ResponsiveContainer>
        <LineChart data={data} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={this.props.viztype} stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
        </>
    }
}

export default Chart;