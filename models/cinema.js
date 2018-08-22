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

Cinema.prototype.findFilm = function(title) {
  let searchFunction = function(film){
    return film.title === title
  }
  let result = this.films.find(searchFunction);
  return result;
};

module.exports = Cinema;
