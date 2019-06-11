import React from "react";
import Mov from "./Mov";
import PropTypes from "prop-types";

class Movies extends React.Component {
  render() {
    return this.props.movies.map(movie => (
      <Mov
        key={movie.id}
        movie={movie}
        markWatched={this.props.markWatched}
        delMovie={this.props.delMovie}
      />
    ));
  }
}

// PropTypes
Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  markWatched: PropTypes.func.isRequired,
  delMovie: PropTypes.func.isRequired
};

export default Movies;
