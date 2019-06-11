$.getJSON("http://www.omdbapi.com/?apikey=cd5550cd&i=tt1285016", function(
  data
) {
  console.log(data);
  var poster = data.poster;
  $(".poster").attr("src", poster);
});
