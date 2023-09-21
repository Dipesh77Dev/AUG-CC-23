import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const MovieProps1 = (props) => {
  //   console.log(props);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
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
    </div>
  );
};


const MovieProps = ({img, no, seriesName, desc, link}) => {
    //   console.log(props);
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Card style={{ width: "18rem", height: "30rem", overflow: "hidden" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Text>{no}</Card.Text>
            <Card.Title>{seriesName}</Card.Title>
            {/* <Card.Title>{props.seriesName}</Card.Title> */}
            <Card.Text style={{ textWrap: "nowrap" }}>{desc}</Card.Text>
            <a href={link} target="_blank">
              <Button variant="primary">Watch</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  };

export default MovieProps;

/*
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
      <Card.Text>1</Card.Text>
    <Card.Title>Virgin River</Card.Title>
    <Card.Text>
     Season Five Part 1of Virgin River features surprising new relationships, a shocking break-up, a difficult court trial, a heartbreaking goodbye, and a wildfire that threatens the town, bringing some people of Virgin River together while tearing others apart.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
      <Card.Text>1</Card.Text>
    <Card.Title>Virgin River</Card.Title>
    <Card.Text>
     Season Five Part 1of Virgin River features surprising new relationships, a shocking break-up, a difficult court trial, a heartbreaking goodbye, and a wildfire that threatens the town, bringing some people of Virgin River together while tearing others apart.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>;
*/
