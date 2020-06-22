import React from 'react';
import { Table, Badge } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'

const map_status = (unit) => <div>
<Card.Title className="italic">Adaptive control status (by {unit})</Card.Title>
    <p>
    An adaptive control policy sorts geographic units into different policy regimes based on a certain trigger. In the map displayed, each {unit} is colored according to a policy regime based on its <b>reproductive rate</b> (<i>R<sub>t</sub></i>): the number of additional cases in a community that a single person creates. 
    </p>
    <p>
        In the policy presented, we restrict movement in each {unit} based on the following criteria:
        <br></br>
    </p>
    <Table>
        <thead>
            <tr style={{"text-align": "center"}}> <th>Policy Regime</th> <th>Trigger</th> <th>Description</th> </tr>
            <tr> <td><Badge pill size="lg" variant="danger">  CRITICAL </Badge></td>  <td><i>R<sub>t</sub></i> &ge; 2 </td></tr>
            <tr> <td><Badge pill size="lg" variant="warning">  MODERATE </Badge></td> <td><i>1 &le; R<sub>t</sub></i> &lt; 2 </td> </tr>
            <tr> <td><Badge pill size="lg" variant="success"> IMPROVING </Badge></td> <td><i>R<sub>t</sub></i> &lt; 1</td> </tr>
        </thead>
    </Table>
</div>

const map_Rt = (unit) => <div>
<Card.Title className="italic">Reproductive rate (by {unit})</Card.Title>
<p>
For a given infectious disease, the <b>reproductive rate</b> (<i>R<sub>t</sub></i>) is the number of additional cases in a community that a single person creates. When <i>R<sub>t</sub></i> is less than 1, a disease's spread is manageable. Conversely, when the reproductive number exceeds 1, the number of people infected grows exponentially. An adaptive control policy estimates <i>R<sub>t</sub></i> for a given locale and makes per-{unit} determinations about which activities will be allowed to control the spread of the virus.
</p>
<p>This map shows the estimated <i>R<sub>t</sub></i> for each {unit}. Our methods for estimating the reproductive number are described in the whitepaper linked in the "Methods" section.</p> 
</div> 
const plot_Rt = (unit) => <div>
<Card.Title className="italic">Reproductive rate over time</Card.Title>
<p>
For a given infectious disease, the <b>reproductive rate</b> (<i>R<sub>t</sub></i>) is the number of additional cases in a community that a single person creates. When <i>R<sub>t</sub></i> is less than 1, a disease's spread is manageable. Conversely, when the reproductive number exceeds 1, the number of people infected grows exponentially. An adaptive control policy estimates <i>R<sub>t</sub></i> for a given locale and makes per-{unit} determinations about which activities will be allowed to control the spread of the virus.
</p>
<p>This plot shows the estimated <i>R<sub>t</sub></i> as a function of time. 

The black line is an estimate of the reproductive number as each date for the given data available. The 95% confidence interval of our estimate is shown in shaded gray. The blue line is a 5-day linear projection of the estimated reproductive number based on the 5 most recent days of data.

Our methods for estimating the reproductive number are described in more detail in the whitepaper linked in the "Methods" section.</p> 
</div> 
const plot_I_rate = (unit) => {return (<div>
<Card.Title className="italic">Infection rate over time </Card.Title>
<p>This plot shows the number of COVID-19 infections per million people over time.</p>
{
(unit === "district") &&
<p>The black line shows the infection rate for the given state. The grey line is the infection rate for the entire country, for comparison. </p>
}
</div>)}
const plot_total_I = (unit) => {return (<div>
    <Card.Title className="italic">Active infections over time</Card.Title>
    <p>This plot shows the total number of COVID-19 infections over time.</p>
    {
    (unit === "district") &&
    <p>The black line shows the number of infections for the given state. The grey line is the number of infections for the entire country, for comparison. </p>
    }
    </div>)}
export const Details = ({viztype, geography}) => {
    var unit = (geography === "IN") ? "state" : "district"
    
    if (viztype === "map_status")   { return map_status(unit)   } else 
    if (viztype === "map_Rt")       { return map_Rt(unit)       } else 
    if (viztype === "plot_Rt")      { return plot_Rt(unit)      } else 
    if (viztype === "plot_I_rate")  { return plot_I_rate(unit)  } else 
    if (viztype === "plot_total_I") { return plot_total_I(unit) } else  
    return  <div></div>    
}
