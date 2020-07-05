import React from 'react';
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Whitepaper from '../assets/adaptive_control_whitepaper.pdf';
import cardHeader from "../utils.js";

const StaticBoxes = () => <><Row>
    <Col>
        <Card>
            {cardHeader("COVIN Team")}
            <Card.Body>
            <p>
                The COVIN team is a group of academics from a number of universities (University of Chicago, MIT, Duke, Stanford, among others) that came together after the COVID pandemic struck to develop models and do empirical work to support the response to COVID in India.
            </p>
            {/* <p>
                The parameter estimation and adaptive control model is built on work done by{" "}
                <a href="https://twitter.com/bettencourtluis">Luis Bettencourt</a>, <a href="https://twitter.com/satejsoman">Satej Soman</a>, and{" "}
                <a href="http://www.anupmalani.com/">Anup Malani</a> at the University of Chicago, with critical inputs from <a href="http://web.mit.edu/dikaiser/www/">David Kaiser</a>, <a href="https://economics.mit.edu/faculty/gruberj/short">Jon Gruber</a>, and
                Stuti Sachdeva at MIT; <a href="http://www.idfcinstitute.org/about/people/team/vaidehi-tandel/">Vaidehi Tandel at IDFC Institute</a>; <a href="https://sanford.duke.edu/people/faculty/mohanan-manoj">Manoj Mohanan</a> at Duke; and many others. It benefited from critical feedback from{' '} <a href="https://sph.umich.edu/faculty-profiles/mukherjee-bhramar.html">Bhramar Mukherjee</a> at the University of Michigan as well as data analysis by <a href="https://sites.google.com/site/clemimbert/">Clément Imbert</a> at the University of Warwick and <a href="https://samuelasher.com/">Sam Asher</a> at Johns Hopkins. <a href="https://devavrat.mit.edu/">Devavrat Shah</a> and
                his students at MIT played a critical role in validating our SIR model against a model that used their synthetic intervention methods.
            </p>
            <p>
                Additional analysis, visualization, and engineering was done by Nico Marchio, Manasi Phadnis, Caitlin Loftus, Ananya Karanam, and Thomas
                Weil (all at the University of Chicago).
            </p> */}
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
                <a href="https://www.covid19india.org">Covid19India</a>.
            </p>
            </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card>
            {cardHeader("Methods")}
            <Card.Body>
            <p>
                The methods used to forecast infections and reproductive rate, as well as recommendations for control, are described in detail in {" "}
                <a href = {Whitepaper} target = "_blank" rel="noopener noreferrer">our whitepaper</a>.
            </p>
            </Card.Body>
        </Card>
    </Col>
</Row></>

export default StaticBoxes;