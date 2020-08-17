import React from "react";

import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Plot, { state_codes } from "./components/Plot.js";
import { Details } from "./components/Details.js";
import StaticBoxes from "./components/StaticBoxes.js"
import Header from "./components/Header.js"
import "./App.css";
import cardHeader from "./utils.js";

export default class App extends React.Component {
  state = {
    vizType: "chart_Rt",
    geography: "TT",
  };

  render() {
    return (
      <>
        <div className="App container">
          <Row><Col><Header /></Col></Row>
          <Row>
            <Col sm={8}>
              <Card id="viz_box">
                {cardHeader("Visualization")}
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
                              <b>METRIC</b>
                            </Form.Label>
                            <Form.Control
                              as="select"
                              size="lg"
                              custom
                              onChange={(e) => {
                                this.setState({ vizType: e.target.value });
                              }}>
                            {/* <optgroup label="Charts"> */}
                                <option value="chart_Rt">Reproductive rate</option>
                                <option value="chart_confirmed">Confirmed Infections</option> 
                                <option value="chart_recovered">Recovered Cases</option>
                                <option value="chart_deceased">Deceased Cases</option>
                                <option value="chart_tested">Number Tested</option>
                                <option value="chart_infection_rate">Infection Rate</option>
                                <option value="chart_recovery_rate">Recovery Rate</option>
                                <option value="chart_active_per_mn">Active Per Million</option>
                                <option value="chart_cfr">Case Fatality Rate</option>
                              {/* </optgroup> */}
                              {/* <optgroup label="Maps"> */}
                                {/* <option value="map_status">Adaptive Control Status</option> */}
                                {/* <option value="map_Rt">Reproductive rate</option> */}
                              {/* </optgroup> */}
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                    </Card.Body>
                  <Plot vizType={this.state.vizType} geography={this.state.geography}/>
              </Card>
            </Col>
            <Col sm={4}>
              <Card id="detail_box">
                {cardHeader("Details")}
                <Card.Body>
                  <Details vizType={this.state.vizType} geography={this.state.geography} />
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
