const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listFilms = function() {
  let filmTitles = [];
    this.films.forEach(function(film){
    filmTitles.push(film.title);
})
  return filmTitles;
};
module.exports = Cinema;
