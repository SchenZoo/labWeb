import * as Rxjs from 'rxjs';
export class MyService{
    
    static findFilm(name)
    {
        
            return fetch("http://localhost:3000/movies")
            .then(response=>response.json())
            .then(x=>x.filter(film=>film.Title.toLowerCase().includes(name.toLowerCase())));
            
        
    }
    static getCategories()
    {
        return fetch("http://localhost:3000/movies")
            .then(response=>response.json());

    }
    static findFilmByCategory(category)
    {
        return fetch("http://localhost:3000/movies")
            .then(response=>response.json())
            .then(films=>films.filter(film=>film.Genre.indexOf(category)!=-1));
    }
    static findFilmByID(id)
    {
        return fetch("http://localhost:3000/movies")
        .then(response=>response.json())
        .then(films=>films.filter(film=>film.imdbID==`${id}`))
        .then(films=>films[0]);
    }
}