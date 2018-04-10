import * as Rxjs from 'rxjs';
export class MyService{

    static findFilm(name)
    {
        
            return Rxjs.Observable.fromPromise(fetch("http://localhost:3000/movies")
            .then(response=>response.json())
            .then(x=>x.filter(film=>film.Title.toLowerCase().includes(name.toLowerCase()))));
            
        
    }
}