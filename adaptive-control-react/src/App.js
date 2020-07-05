import React from "react";

import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Plot, { state_codes } from "./components/Plot.js";
import { Details } from "./components/Details.js";
import StaticBoxes from "./components/StaticBoxes.js"
import "./App.css";
import cardHeader from "./utils.js";

export default class App extends React.Component {
  state = {
    vizType: "chart_confirmed",
    geography: "TT",
  };

  render() {
    return (
      <>
        <div className="App container">
          <Row>
            <Col>
              <Card className="text-center" style={{"background-color": "#343a40", "opacity": 0.95}}> 
                <Card.Body>
                <h1 className="text-white" style={{"background-color": "#343a40", "opacity": 0.95}}>
                  {" "}
                  Adaptive Control of COVID-19 in India{" "}
                </h1>
                <Card.Subtitle as="h3" className="text-light">
                    {" "}
                    Tracking disease and recommending control efforts across states and districts
                  </Card.Subtitle>
                  <hr></hr>
                  <button type="button" class="btn btn-light">
                  <strong>Disclaimer</strong>: Our estimators are based on data from <a href="https://www.covid19india.org">Covid19India</a>, a crowd-sourced database of infection information for India. Our estimators and modeling are an active work in progress and subject to revision as we improve their accuracy and visualizations on this website. If you have comments or corrections, please <a href="https://github.com/mansueto-institute/adaptive-control-feedback/issues/new/choose">file an issue on GitHub</a>.
                  </button>
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
                            <Form.Label className="text-dark">
                              <b>GEOGRAPHY</b>
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ geography: e.target.value });
                              }}>
                              <option value="TT">All India</option>
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
                            <Form.Label className="text-dark">
                              <b>VISUALIZATION</b>
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ vizType: e.target.value });
                              }}>
                            <optgroup label="Charts">
                                {/* <option value="plot_Rt">Reproductive rate</option> */}
                                <option value="chart_confirmed">Confirmed Infections</option>
                                <option value="chart_recovered">Recovered Cases</option>
                                <option value="chart_deceased">Deceased Cases</option>
                                <option value="chart_tested">Number Tested</option>
                              </optgroup>
                              <optgroup label="Maps">
                                <option value="map_status">Adaptive Control Status</option>
                                <option value="map_Rt">Reproductive rate</option>
                              </optgroup>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                    </Card.Body>
                  <Plot key={this.state.geography+this.state.vizType} viztype={this.state.vizType} geography={this.state.geography}/>
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
          <StaticBoxes />
        </div>
      </>
    );
  }
}
