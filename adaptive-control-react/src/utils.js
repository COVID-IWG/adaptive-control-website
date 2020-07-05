import React from "react";
import Card from "react-bootstrap/Card";

const cardHeader = (name) => (
    <Card.Header as="h2" class="card-header border-dark text-white" style={{"background-color": "#343a40", "opacity": 0.8}}>
      {name}
    </Card.Header>
  );

export default cardHeader;