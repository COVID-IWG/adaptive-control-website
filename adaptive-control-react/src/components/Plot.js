import React from "react";
import SVG from 'react-inlinesvg';
// import plot from './data/AP_plot_Rt.svg'

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
    }
    
    render() {
        // if (this.props.geography === "IN" && (this.props.viztype === "map_Rt" || this.props.viztype === "map_status"))
        //     return <div>l o a d i n g . . .</div>
        const plotKey  = "plot_" + this.props.geography

        return <SVG  
            innerRef={this.svgRef}
            key={plotKey} 
            // class="svg_parent"
            src={require("./data/" + this.props.geography +"_" + this.props.viztype + ".svg")}
            onError={(e) => console.log(e)}
            onLoad={(x) => {
                const node = this.svgRef.current;
                console.log(node)
                // node.setAttribute("preserveAspectRatio", "none")
                // node.setAttribute("width", "auto")
                // node.setAttribute("viewBox", "0 0 900 400")
                console.log(node)
            }}
        />
        }
    }

// const Plot = ({viztype, geography}) => {
//     if (geography === "IN" && (viztype === "map_Rt" || viztype === "map_status"))
//         return <p>l o a d i n g . . .</p>
//     const plotKey  = "plot_" + geography

//     return <SVG  
//         key={plotKey} 
//         class="my-auto mx_auto"
//         src={require("./data/" + geography +"_" + viztype + ".svg")}
//         onError={(e) => console.log(e)}
//         onLoad={(x) => {
//             console.log(x)
//             console.log(this)
//         }}
//     />
    
// }

export default Plot;