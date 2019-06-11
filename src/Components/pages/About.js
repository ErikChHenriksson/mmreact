import React from "react";

function About() {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }}>
        <h2>About</h2>
        <p style={{ textAlign: "center" }}>MovieMinded app 1.0.0</p>
        <p>
          This web application was constructed through the use of html, css,
          react, javascript and Jquery.
          <br /> <br />
          <h4> Watchlist </h4>
          The list of movies in the watchlist section were imported from the
          list of 100 top rated movies on rotten tomatoes. <br />
          They were imported using OutWit and regEx and are now gathered in the
          top99movies.json file.
          <br /> <br />
          <h4> Quiz </h4>
          The idea for the quiz is simple; Provided a shot plot description, the
          user of the application is supposed to guess which movie is being
          described. <br />
          All plot descriptions and titles of movies are gathered using API
          requests to OMDb API (omdbapi.com). <br />
          The answers provided by the user will be compared to the title of the
          movie gathered from the API request, non case sensitive.
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;
