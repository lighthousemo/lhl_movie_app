$(document).ready(function() {
  var mainPageEl = $("#main-page");

  var movies = [
    {id: 1, title: "Titanic", poster_url: "http://t0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp", synopsis: "James Cameron's Titanic is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built.", year: 2011},
    {id: 2, title: "Other Movie", poster_url: "http://t0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp", synopsis: "Some text", year: 2011},

  ];

  var menuEl = Handlebars.compile($("#menu").html())({movies: movies});
  var movieShowEl = Handlebars.compile($("#movie-show").html())({movie: movies[0]});
  var movieEditEl = Handlebars.compile($("#movie-edit").html())({movie: movies[0]});

  mainPageEl.append(menuEl);
  mainPageEl.append(movieShowEl);
  // mainPageEl.append(movieEditEl);
});
