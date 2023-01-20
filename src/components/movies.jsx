import React, { Component } from "react";
import { getMovies } from "../Service/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete(id) {
    const movies = this.state.movies.filter((movie) => movie._id !== id);
    this.setState({ movies });
  }

  render() {
    const { length: count } = this.state.movies;
    return (
      <>
        {count ? (
          <>
            <p style={{ fontSize: 25 }}>
              Showing {count} movies in the database.
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.state.movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie._id)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <p style={{ fontSize: 25 }}>There are no movies in the database.</p>
        )}
      </>
    );
  }
}

export default Movies;