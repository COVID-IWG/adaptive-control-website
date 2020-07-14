import React from 'react';
// import { Table, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

// const map_status = (unit) => <div>
// <Card.Title className="italic">Adaptive control status (by {unit})</Card.Title>
//     <p>
//     An adaptive control policy sorts geographic units into different policy regimes based on a certain trigger. In the map displayed, each {unit} is colored according to a policy regime based on its <b>reproductive rate</b> (<i>R<sub>t</sub></i>): the number of additional cases in a community that a single person creates. 
//     </p>
//     <p>
//         In the policy presented, we restrict movement in each {unit} based on the following criteria:
//         <br></br>
//     </p>
//     <Table size="sm" borderless={true}>
//         <thead>
//             <tr> <th>Policy Regime</th><th>Trigger</th></tr>
//             <tr> <td><Badge pill size="lg" variant="danger">CRITICAL</Badge></td><td><i>R<sub>t</sub></i> &ge; 2</td></tr>
//             <tr> <td><Badge pill size="lg" variant="warning">MODERATE</Badge></td><td><i>1 &le; R<sub>t</sub></i> &lt; 2 </td></tr>
//             <tr> <td><Badge pill size="lg" variant="success">IMPROVING</Badge></td><td><i>R<sub>t</sub></i> &lt; 1</td></tr>
//         </thead>
//     </Table>

//     {/* <p>
//     The adaptive nature of the policy means that districts falling under different categories will implement different measures based on estimated reproductive numbers. For example, a critical district may shut down all non-essential travel and require masks, while a green district may allow travel to adjacent green districts.
//     </p> */}

//     <p>
//     Our policy simulations use reproductive number as a trigger, but other triggers are possible (such as the infection count doubling time used by the Ministry of Home Affairs).
//     </p>
// </div>

// const map_Rt = (unit) => <div>
// <Card.Title className="italic">Reproductive rate (by {unit})</Card.Title>
// <p>
// For a given infectious disease, the <b>reproductive rate</b> (<i>R<sub>t</sub></i>) is the number of additional cases in a community that a single person creates. When <i>R<sub>t</sub></i> is less than 1, a disease's spread is manageable. Conversely, when the reproductive number exceeds 1, the number of people infected grows exponentially. An adaptive control policy estimates <i>R<sub>t</sub></i> for a given locale and makes per-{unit} determinations about which activities will be allowed to control the spread of the virus.
// </p>
// <p>This map shows the estimated <i>R<sub>t</sub></i> for each {unit}. Our methods for estimating the reproductive number are described in the whitepaper linked in the "Methods" section.</p> 
// <Table size="sm" borderless={true}>
//         <thead>
//             <tr> <th>Color</th><th><i>R<sub>t</sub></i></th></tr>
//             <tr> <td><Badge pill style={{"background-color": "#5b7dff"}} size="lg"><div style={{"opacity": 0}}>.</div></Badge></td><td>0</td></tr>
//             <tr> <td><Badge pill style={{"background-color": "#6610f2"}} size="lg"><div style={{"opacity": 0}}>.</div></Badge></td><td>2</td></tr>
//             <tr> <td><Badge pill style={{"background-color": "#6f42c1"}} size="lg"><div style={{"opacity": 0}}>.</div></Badge></td><td>5</td></tr>
//             <tr> <td><Badge pill style={{"background-color": "#BFBFBF"}} size="lg"><div style={{"opacity": 0}}>.</div></Badge></td><td>Missing</td></tr>
//         </thead>
//     </Table>

// </div> 
const plot_Rt = (unit) => <div>
<Card.Title className="italic">Reproductive rate over time</Card.Title>
<p>
For a given infectious disease, the <b>reproductive rate</b> (<i>R<sub>t</sub></i>) is the number of additional cases in a community that a single person creates. When <i>R<sub>t</sub></i> is less than 1, a disease's spread is manageable. Conversely, when the reproductive number exceeds 1, the number of people infected grows exponentially. An adaptive control policy estimates <i>R<sub>t</sub></i> for a given locale and makes per-{unit} determinations about which activities will be allowed to control the spread of the virus.
</p>
<p>This plot shows the estimated <i>R<sub>t</sub></i> as a function of time. 

The black line is an estimate of the reproductive number as each date for the given data available. The 95% confidence interval of our estimate is shown in shaded gray. 
{/* The blue line is a 5-day linear projection of the estimated reproductive number based on the 5 most recent days of data. */}
{" "}
Our methods for estimating the reproductive number are described in more detail in the whitepaper linked in the "Methods" section.</p> 
</div> 

const plot_confirmed = (unit) => {return (<div>
<Card.Title className="italic">Active infections over time</Card.Title>
<p>This plot shows the number of COVID-19 infections over time for the selected geography.</p>
{/* {
(unit === "district") &&
<p>The black line shows the number of infections for the given state. The grey line is the number of infections for the entire country, for comparison. </p>
} */}
</div>)}

const plot_recovered = (unit) => {return (<div>
<Card.Title className="italic">Recoveries over time</Card.Title>
<p>This plot shows the number of people who have recovered from COVID-19 over time for the selected geography.</p>
{/* {
(unit === "district") &&
<p>The black line shows the number of infections for the given state. The grey line is the number of infections for the entire country, for comparison. </p>
} */}
</div>)}

const plot_deceased = (unit) => {return (<div>
<Card.Title className="italic">Deceased over time</Card.Title>
<p>This plot shows the number of people who have succumbed to COVID-19 over time for the selected geography.</p>
{/* {
(unit === "district") &&
<p>The black line shows the number of infections for the given state. The grey line is the number of infections for the entire country, for comparison. </p>
} */}
</div>)}

const plot_tested = (unit) => {return (<div>
<Card.Title className="italic">Recoveries over time</Card.Title>
<p>This plot shows the number of COVID-19 tests administered over time in the selected geography.</p>
{/* {
(unit === "district") &&
<p>The black line shows the number of infections for the given state. The grey line is the number of infections for the entire country, for comparison. </p>
} */}
</div>)}

export const Details = ({vizType, geography}) => {
    var unit = (geography === "IN") ? "state" : "district"
    
    if (vizType === "chart_Rt")        { return plot_Rt(unit)        } else 
    if (vizType === "chart_confirmed") { return plot_confirmed(unit) } else 
    if (vizType === "chart_recovered") { return plot_recovered(unit) } else 
    if (vizType === "chart_deceased")  { return plot_deceased(unit)  } else 
    if (vizType === "chart_tested")    { return plot_tested(unit)    } else 
    return  <div></div>    
}
