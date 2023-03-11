import React from "react";
import Joi from "joi-browser";
import { useParams, useNavigate } from "react-router-dom";
import { getMovie, saveMovie } from "../Service/fakeMovieService";
import { getGenres } from "../Service/fakeGenreService";
import Form from "./common/form";

class MoviesForm extends Form {
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });

    const { id: movieId } = this.props.params;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) {
      const navigate = this.props.navigate;
      return navigate("/not-found", { replace: true });
    }

    this.setState({ data: this.mapToViewModel(movie) });
  }

  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    saveMovie(this.state.data);

    const navigate = this.props.navigate;
    navigate("/movies", { replace: true });
  };

  render() {
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </>
    );
  }
}

export default (props) => (
  <MoviesForm {...props} params={useParams()} navigate={useNavigate()} />
);
