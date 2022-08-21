import React, { useState, createContext } from "react";

export const MovieContext = createContext();
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
export const MovieContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {children}
    </MovieContext.Provider>
  );
};
