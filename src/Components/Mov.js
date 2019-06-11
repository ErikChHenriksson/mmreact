import React, { Component } from "react";
import PropTypes from "prop-types";

export class Mov extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      color: this.props.movie.watched ? "#999999" : "#000000"
    };
  };

  render() {
    const { id, title } = this.props.movie;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markWatched.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.delMovie.bind(this, id)} style={btnStyle}>
            Remove
          </button>
        </p>
      </div>
    );
  }
}

// PropTypes
Mov.propTypes = {
  movie: PropTypes.object.isRequired,
  markWatched: PropTypes.func.isRequired,
  delMovie: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "line",
  padding: "5px 12px",
  borderRadius: "7px",
  cursor: "pointer",
  float: "right"
};

export default Mov;
