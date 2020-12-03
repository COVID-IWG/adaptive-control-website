import React from "react";
import { Row } from "react-bootstrap";

import chart_Rt_JK from '../assets/chart_Rt_JK.png'
import chart_Rt_SS from '../assets/chart_Rt_SS.png'
import chart_Rt_TT from '../assets/chart_Rt_TT.png'
import chart_confirmed_JK from '../assets/chart_confirmed_JK.png'
import chart_confirmed_SS from '../assets/chart_confirmed_SS.png'
import chart_confirmed_TT from '../assets/chart_confirmed_TT.png'
import map_Rt_JK from '../assets/map_Rt_JK.png'
import map_Rt_SS from '../assets/map_Rt_SS.png'
import map_Rt_TT from '../assets/map_Rt_TT.png'

const images = { 
    "chart_Rt_JK": chart_Rt_JK,
    "chart_Rt_SS": chart_Rt_SS,
    "chart_Rt_TT": chart_Rt_TT,
    "chart_confirmed_JK": chart_confirmed_JK,
    "chart_confirmed_SS": chart_confirmed_SS,
    "chart_confirmed_TT": chart_confirmed_TT,
    "map_Rt_JK": map_Rt_JK,
    "map_Rt_SS": map_Rt_SS,
    "map_Rt_TT": map_Rt_TT
}


const Plot = (props) => {
    return <Row style={{textAlign: "center", verticalAlign: "middle", height: "100%"}}>
        <div>
        <img src = {images[props.vizType + "_" + props.geography]} alt = {"plot"}  height  = "100%" width="90%"/>
        </div>
    </Row>
}

export default Plot;