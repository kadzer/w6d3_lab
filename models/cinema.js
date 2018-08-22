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

Cinema.prototype.filterByGenre = function(genre) {
  let filterFunction = function(film){
    return film.genre === genre
  }
  let result = this.films.filter(filterFunction);
  return result;
};

Cinema.prototype.filterByYear = function(year) {
  let filterFunction = function(film){
    return film.year === year
  }
  let result = this.films.filter(filterFunction);
  return result;
};

module.exports = Cinema;
