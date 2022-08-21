import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
function Movie({ movie }) {
  const variants = [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ];
  return (
    <Card
      bg={variants[movie.id > 7 ? movie.id - 8 : movie.id]?.toLowerCase()}
      key={variants[movie.id]}
      text={variants[movie.id]?.toLowerCase() === "light" ? "dark" : "white"}
      style={{ width: "18rem" }}
      className="mb-3"
    >
      <Card.Body>
        <Card.Title> {movie.title} </Card.Title>
        <Card.Text>
          <ListGroup>
            <ListGroup.Item>Director: {movie.artist}</ListGroup.Item>
            <ListGroup.Item>Price: ${movie.price}</ListGroup.Item>
          </ListGroup>
        </Card.Text>
        <Button
          variant={variants[
            8 - movie.id < 0 ? movie.id - 8 : 8 - movie.id
          ]?.toLowerCase()}
        >
          Get Ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Movie;
