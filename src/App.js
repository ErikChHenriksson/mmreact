import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import Movies from "./Components/Movies";
import AddMovie from "./Components/AddMovie";
import About from "./Components/pages/About";
import Quiz from "./Components/pages/Quiz";
import uuid from "uuid";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get("top99movies.json")
      .then(res => this.setState({ movies: res.data }));
  }

  // Toggle Watched
  markWatched = id => {
    this.setState({
      movies: this.state.movies.map(movie => {
        if (movie.id === id) {
          movie.watched = !movie.watched;
        }
        return movie;
      })
    });
  };

  //Delete
  delMovie = id => {
    this.setState({
      movies: [...this.state.movies.filter(movie => movie.id !== id)]
    });
  };

  // Add Movie
  addMovie = title => {
    var movtoadd = {
      id: uuid.v4(),
      title,
      watched: false
    };
    this.setState({ movies: [...this.state.movies, movtoadd] });
  };

//Render with routing for accessing the different pages.
  render() {
    return (
      <Router>
        <div
          className="App"
          style={{
            paddingBottom: "20%",
            position: "relative",
            minimumHeight: "100%",
            margin: "0",
            backgroundColor: "#fff"
          }}
        >
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <AddMovie addMovie={this.addMovie} />
                  <Movies
                    movies={this.state.movies}
                    markWatched={this.markWatched}
                    delMovie={this.delMovie}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/quiz" component={Quiz} />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
