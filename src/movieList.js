import {Movie} from './movie'

export class movieList
{
    constructor()
    {
        this.list=[];
    }
    createSearchList(searchElement,count)
    {
        if(count!==undefined)
            createList(this.list.slice(0,count));
        else
            createList(this.list);

        function createList(array)
        {
            array.forEach( (film)=> 
            {
                searchElement.appendChild(film.makeAsSearchItem());
            });
        }
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