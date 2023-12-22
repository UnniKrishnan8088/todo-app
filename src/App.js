import React, { useState } from "react";
import ListItem from "./ui/ListItem";
import uuid from "react-uuid";
import "./App.scss";

function App() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [director, setDirector] = useState("");
  const [movie, setMovie] = useState("");

  //to add item
  function addtoList(e) {
    e.preventDefault();
    if (director === "" || movie === "") return;

    //creating an new object for the details
    const newMovie = {
      id: uuid(),
      director,
      movie,
    };

    setMovieDetails((movieDetails) => [...movieDetails, newMovie]);

    //clearing the input fields
    setMovie("");
    setDirector("");
  }

  //to delete item
  function deleteItem(id) {
    const updatedItem = movieDetails.filter((data) => data.id !== id);
    setMovieDetails(updatedItem);
  }

  return (
    <div className="container">
      <h2>Director and Movies</h2>
      <div className="inputs">
        <form action="" onSubmit={addtoList}>
          <input
            type="text"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
            placeholder="Director name"
          />
          <input
            type="text"
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            placeholder="Movie name"
          />
          <button>Add</button>
        </form>
        {movieDetails.map((item) => (
          <ListItem movie={item} key={item.id} deleteItem={deleteItem} />
        ))}
      </div>
    </div>
  );
}

export default App;
