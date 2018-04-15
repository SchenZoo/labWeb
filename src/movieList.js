import {Movie} from './movie'

export class movieList
{
    constructor()
    {
        this.list=[];
    }
    createSearchList(searchElement)
    {
        this.list.forEach( film => 
        {
            searchElement.appendChild(film.makeAsSearchItem());
        });
    }
    createList(parent)
    {
        this.list.forEach( film => 
            {
                parent.appendChild(film.makeShortDescription());
            });
    }

    addMovies(movieArray)
    {
        movieArray.forEach(movie=>
        {
            this.list.push(new Movie(movie.Title,movie.Genre,movie.Year,movie.imdbID,movie.Actors,movie.Plot,movie.imdbRating,movie.Production,movie.Website,movie.Poster,movie.YT));
        }
    );
    }
    addMovie(movie)
    {
        this.list.push(new Movie(movie.Title,movie.Genre,movie.Year,movie.imdbID,movie.Actors,movie.Plot,movie.imdbRating,movie.Production,movie.Website,movie.Poster,movie.YT));
    }
    clearList()
    {
        this.list=[];
    }
}