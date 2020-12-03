import React from "react";

import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

import Plot from "./components/Plot.js";
import { Details } from "./components/Details.js";
import StaticBoxes from "./components/StaticBoxes.js"
import Header from "./components/Header.js"
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
                              <option value="TT">All Indonesia</option>
                              <option value="JK">Jakarta</option>
                              <option value="SS">South Sulawesi</option>
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
                                <option value="chart_confirmed">Confirmed Infections</option> 
                                <option value="chart_Rt">Reproductive Rate (time series)</option>
                                <option value="map_Rt">Reproductive Rate (map)</option>
                            </Form.Control>
                          </Form.Group>
                        </Col>
                      </Row>
                        <Plot vizType={this.state.vizType} geography={this.state.geography}/>
                    </Form>
                  </div>
                    </Card.Body>
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
