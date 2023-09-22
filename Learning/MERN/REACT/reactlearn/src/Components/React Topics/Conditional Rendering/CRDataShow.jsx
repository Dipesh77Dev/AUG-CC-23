import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CRDataShow = (props) => {
  return (
    <Container>
        <Card style={{ width: "18rem", height: "30rem", overflow: "hidden" }}>
          <Card.Img variant="top" src={props.img} />
          <Card.Body>
            <Card.Text>{props.no}</Card.Text>
            <Card.Title>{props.seriesName}</Card.Title>
            <Card.Text style={{ textWrap: "nowrap" }}>{props.desc}</Card.Text>
            <a href={props.link} target="_blank">
              <Button variant="primary">Watch</Button>
            </a>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default CRDataShow;
