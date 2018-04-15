import { MyService } from './myservice.service';
import './component';
import * as Rxjs from 'rxjs'
import { movieList } from './movieList';


let sorting=sortByRating;
let radios=document.getElementsByName('choice');
let container=document.getElementsByClassName("container")[0];
let radio1=radios[0];
let radio2=radios[1];


let myList=new movieList();


radio1.onclick=function()
{
    sorting=sortByRating;
    console.log("radio1 clicked");
    show();
}
radio2.onclick=function()
{
    sorting=sortByName;
    console.log("radio2 clicked");
    show();
}
let params = (new URL(document.location)).searchParams;
let category = params.get("category");
let name=params.get("name");

if(category!==null)
var films=MyService.findFilmByCategory(category);
if(name!==null)
var films=MyService.findFilm(name);
let divForList=document.createElement('div');
container.appendChild(divForList);

films.then(filmz=>
    {
        filmz.forEach((movie)=>
        {
            myList.addMovie(movie);
        });
        show();
    });


function show()
{
    while(divForList.firstChild)
    divForList.removeChild(divForList.firstChild);
    console.log("iz Show-a");
    console.log(sorting);
    console.log(myList);
    myList.list.sort(sorting);
    console.log(myList);
    myList.createList(divForList);
}


function sortByRating(a,b)
{
    return parseInt(b.rating)-parseInt(a.rating);
}
function sortByName(a,b)
{
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}