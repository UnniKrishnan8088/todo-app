export default function ListItem({ movie, deleteItem }) {
  return (
    <div className="movieDetails">
      <div className="item">
        <p>{movie.director}</p>
      </div>
      <div className="item">
        <p>{movie.movie}</p>
      </div>
      <button className="delete" onClick={() => deleteItem(movie.id)}>Remove</button>
    </div>
  );
}
