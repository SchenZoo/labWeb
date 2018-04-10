import * as Rxjs from 'rxjs';
import  {MyService} from './myservice.service';


    function handleClick(input)
    {
        input.innerHTML="";
    }
    function makeItemsForSearchList(el,films)
    {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        films.forEach( film => 
        {
            el.appendChild(makeSearchItem(film));
        });
    }

    function makeSearchItem(film)
    {

        let img = document.createElement("img");
        img.src = film.Poster;
        img.className ="img-responsive img-rounded";
        img.style="max-height: 50px; max-width: 50px;";
        let li=document.createElement('li');
        let a =document.createElement("a");
        a.href=`film.html?id=${film.imdbID}`;
        li.appendChild(a);
        let span = document.createElement("span");
        span.innerHTML=film.Title;

        li.className="dropdown-item text-primary clickable my-2";

        a.appendChild(img);
        a.appendChild(span);
        return li;
    }

    function makeSearchElement(parent){
        let ulSearch=document.getElementById("suggestions");
        let input=document.getElementById("searchInput");

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
            .switchMap( text=>MyService.findFilm(text))
            .subscribe( searchItem => {
                makeItemsForSearchList(ulSearch, searchItem);
                searchItem.length !== 0 ? ulSearch.className="dropdown-menu show" : ulSearch.className="dropdown-menu";
            });
    }
makeSearchElement(document.getElementById('search'));
let films=MyService.getCategories();
let category;
let list=document.getElementById('forCat');
let arrayz=[];
films.then(films=>films.forEach(film=>film.Genre.forEach(function(item)
{
    if(arrayz.indexOf(item)==-1){
    category=document.createElement('a');
    category.className="dropdown-item";
    category.innerHTML=item;
    category.href=`list.html?category=${item}`;
    list.appendChild(category);
    console.log(category);
    console.log(item);
    arrayz.push(item);
}
})));


