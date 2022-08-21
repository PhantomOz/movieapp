import React, { useContext } from "react";
import { MovieContext } from "../store/MovieContext";
import Movie from "./Movie";

// const moviesList = [
//   {
//     id: 1,
//     title: "Matrix",
//     artist: "Matthew Rogers",
//     price: 20,
//   },
//   {
//     id: 2,
//     title: "The Godfather",
//     artist: "Harlem bid",
//     price: 10,
//   },
//   {
//     id: 3,
//     title: "Babylon",
//     artist: "Greg Berginger",
//     price: 15,
//   },
//   {
//     id: 4,
//     title: "Fast & Furious",
//     artist: "Vin Diesel",
//     price: 30,
//   },
//   {
//     id: 5,
//     title: "Everett",
//     artist: "Johannesburg",
//     price: 5,
//   },
//   {
//     id: 6,
//     title: "Wildlife",
//     artist: "Clementine Simon",
//     price: 25,
//   },
// ];

function MovieList() {
  const [movie] = useContext(MovieContext);
  return (
    <div className="p-5 d-flex m-5 mb-3 flex-wrap gap-5 justify-content-start">
      {movie?.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
