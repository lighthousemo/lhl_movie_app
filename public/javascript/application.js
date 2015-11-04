$(document).ready(function() {
  var mainPageEl = $("#main-page");

  // Alternate syntax for getJSON
  // $.getJSON('/api/movies', function(data) {
  //   console.log(data);
  // });

  $.getJSON('/api/movies')
  .success(function(data) {
    var movies = data;
    movies.forEach(function(movie) {
      movie.stringified = JSON.stringify(movie);
    });
    console.log("got data with promises");
    var menuContent = $("#menu").html();
    var menuTemplate = Handlebars.compile(menuContent)

    var movieShowTemplate = Handlebars.compile($("#movie-show").html());
    var movieEditTemplate = Handlebars.compile($("#movie-edit").html());

    mainPageEl.find(".menu").replaceWith(menuTemplate({movies: movies}));
    // above selector is same as $("#main-page .menu")

    $("ul li").click(function(e) {
      // grab movie data from data-movie attribute
      var movie = $(this).data("movie"); // use the jquery data attribute to get the movie
      $("#main-page .content").replaceWith(movieShowTemplate({movie: movie}));
    });
  })
  .error(function(data) {
     console.log("something went wrong: ", data);
  });

});
