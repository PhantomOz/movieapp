import React, { useContext } from "react";
import { MovieContext } from "../store/MovieContext";

function Footer() {
  const [movies] = useContext(MovieContext);
  return (
    <footer className="navbar navbar-dark bg-dark">
      <hr />
      <div className="container">
        <p className="navbar-brand">Copyright &copy; PwC 2022</p>
        <span className="navbar-text">
          The Latest Movie is: {movies[movies.length - 1]?.title}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
