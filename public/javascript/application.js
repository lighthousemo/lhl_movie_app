$(document).ready(function() {
  var mainPageEl = $("#main-page");

  var menuEl = Handlebars.compile($("#menu").html());
  var movieShowEl = Handlebars.compile($("#movie-show").html());
  var movieEditEl = Handlebars.compile($("#movie-edit").html());

  mainPageEl.append(menuEl);
  // mainPageEl.append(movieShowEl);
  mainPageEl.append(movieEditEl);
});
