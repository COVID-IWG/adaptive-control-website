import React from "react";

import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Plot, { state_codes } from "./components/Plot.js";
import { Details } from "./components/Details.js";
import "./App.css";

const cardHeader = (name) => (
  <Card.Header as="h2" class="card-header border-dark text-white" style={{"background-color": "#343a40", "opacity": 0.8}}>
    {name}
  </Card.Header>
);
// style={{"background-color": 'rgba(28, 28, 28, 0.85)'}}
// style={{}} 
export default class App extends React.Component {
  state = {
    vizType: "map_status",
    geography: "IN",
  };

  render() {
    return (
      <>
        <div className="App container">
          <Row>
            <Col>
              <Card className="text-center" style={{"background-color": "#343a40", "opacity": 0.95}}> 
                <Card.Header as="h1" className="text-white" style={{"background-color": "#343a40", "opacity": 0.95}}>
                  {" "}
                  Adaptive Control of COVID-19 in India{" "}
                </Card.Header>
                <Card.Body>
                  <Card.Subtitle as="h3" className="text-white">
                    {" "}
                    Tracking COVID-19 and recommending control efforts across states in India.
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Card id="viz_box">
                {cardHeader("Analysis")}
                <Card.Body>
                  <div>
                    <Form>
                      <Row>
                        <Col>
                          <Form.Group controlId="geoForm">
                            <Form.Label as="h3" className="text-dark">
                              Geography
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ geography: e.target.value });
                              }}>
                              <option value="IN">All India</option>
                              <optgroup label="States">
                                {Object.keys(state_codes).map((k) => (
                                  <option key={k} value={k}>{state_codes[k]}</option>
                                ))}
                              </optgroup>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                        <Col>
                          <Form.Group controlId="vizForm">
                            <Form.Label as="h3" className="text-dark">
                              Visualization
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ vizType: e.target.value });
                              }}>
                              <optgroup label="Maps">
                                <option value="map_status">Adaptive Control Status</option>
                                <option value="map_Rt">Reproductive rate</option>
                              </optgroup>
                              <optgroup label="Plots">
                                <option value="plot_Rt">Reproductive rate</option>
                                <option value="plot_I_rate">Infection rate</option>
                                <option value="plot_total_I">Active Infections</option>
                              </optgroup>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div><Plot key={this.state.geography+this.state.vizType} viztype={this.state.vizType} geography={this.state.geography}/></div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card id="detail_box">
                {cardHeader("Details")}
                <Card.Body>
                  <Details viztype={this.state.vizType} geography={this.state.geography} />
                </Card.Body>
              </Card>
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                {cardHeader("COVIN Team")}
                <Card.Body>
                  <p>
                    The COVIN team is a group of academics from a number of universities (University of Chicago, MIT, Duke, Stanford, among others) that came
                    together after the COVID pandemic struck to develop models and do empirical work to support the response to COVID in India.
                  </p>
                  <p>
                    The parameter estimation and adaptive control model is built on work done by{" "}
                    <a href="https://twitter.com/bettencourtluis">Luis Bettencourt</a>, <a href="https://twitter.com/satejsoman">Satej Soman</a>, and{" "}
                    <a href="http://www.anupmalani.com/">Anup Malani</a> at the University of Chicago, with critical inputs from <a href="http://web.mit.edu/dikaiser/www/">David Kaiser</a>, <a href="https://economics.mit.edu/faculty/gruberj/short">Jon Gruber</a>, and
                    Stuti Sachdeva at MIT; <a href="http://www.idfcinstitute.org/about/people/team/vaidehi-tandel/">Vaidehi Tandel at IDFC Institute</a>; <a href="https://sanford.duke.edu/people/faculty/mohanan-manoj">Manoj Mohanan</a> at Duke; and many others. It benefited from critical feedback from 
                    <a href="https://sph.umich.edu/faculty-profiles/mukherjee-bhramar.html">Bhramar Mukherjee</a> at the University of Michigan as well as data analysis by <a href="https://sites.google.com/site/clemimbert/">Clément Imbert</a> at the University of Warwick and <a href="https://samuelasher.com/">Sam Asher</a> at Johns Hopkins. <a href="https://devavrat.mit.edu/">Devavrat Shah</a> and
                    his students at MIT played a critical role in validating our SIR model against a model that used their synthetic intervention methods.
                  </p>
                  <p>
                    Additional analysis, visualization, and engineering was done by Nico Marchio, Manasi Phadnis, Caitlin Loftus, Ananya Karanam, and Thomas
                    Weil (all at the University of Chicago).
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                {cardHeader("Data Sources")}
                <Card.Body>
                  <p>
                    The testing, case, and deaths data for India reported on this website and used by our model are drawn from{" "}
                    <a href="www.covid19india.org">Covid19India</a>.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                {cardHeader("Methods")}
                <Card.Body>
                  <p>
                    The methods used to forecast infections and reproductive rate, as well as recommendations for control, are described in detail in
                    WHITEPAPER.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}
