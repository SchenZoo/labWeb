import * as Rxjs from 'rxjs';
import { MyService } from './myservice.service';
import {movieList} from './movieList'
    
    let parent=document.getElementById('search');
    let ulSearch=document.getElementById("suggestions");
    let input=document.getElementById("searchInput");
    let myList=new movieList();
    let categoryList=[];
    Rxjs.Observable.fromEvent(input, "input")
        .debounceTime(200)
        .map(ev => ev.target.value)
        .filter(text => {
            if(text.length === 0)
            {
                ulSearch.className = "dropdown-menu";
                ulSearch.innerHTML ="";
            }
            return text.length >0;
        })
        .switchMap( text=>Rxjs.Observable.fromPromise(MyService.findFilm(text)))
        .subscribe( movies => {
            myList.addMovies(movies);
            while (ulSearch.firstChild) {
                ulSearch.removeChild(ulSearch.firstChild);
            }
            myList.createSearchList(ulSearch);
            myList.list.length !== 0 ? ulSearch.className="dropdown-menu show" : ulSearch.className="dropdown-menu";
        });


let films=MyService.getCategories();
let list=document.getElementById('forCategories');

films.then(films=>films.forEach(film=>film.Genre.forEach(function(categoryItem)
{
    if(categoryList.indexOf(categoryItem)==-1){
    let category;category=document.createElement('a');
    category.className="dropdown-item";
    category.innerHTML=categoryItem;
    category.href=`list.html?category=${categoryItem}`;
    list.appendChild(category);
    categoryList.push(categoryItem);
}
})));
