import React, { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MovieContext } from "../store/MovieContext";

function Navbar() {
  const [movies] = useContext(MovieContext);
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <p className="navbar-brand me-auto">Movie App</p>
        <Button variant="light" className="d-flex align-items-center gap-2">
          The Length of Movie <Badge bg="danger">{movies.length}</Badge>
        </Button>

        <Link to="/addmovie">
          <Button variant="light" className="mx-3">
            +
          </Button>
        </Link>

        <hr />
      </div>
    </nav>
  );
}

export default Navbar;
