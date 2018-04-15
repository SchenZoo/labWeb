import { MyService } from './myservice.service';
import './component';
import * as Rxjs from 'rxjs'
import { movieList } from './movieList';


let sorting=sortByRating;
let choices=document.getElementsByName('choice');
let container=document.getElementsByClassName("container")[0];
let ascending=false;
let radio1=choices[0];
let radio2=choices[1];
let check=choices[2];
let myList=new movieList();

check.onchange=function()
{
    ascending=!ascending;
    show();
}
radio1.onclick=function()
{
    sorting=sortByRating;
    show();
}
radio2.onclick=function()
{
    sorting=sortByName;
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
    myList.list.sort(sorting);
    myList.createList(divForList);
}


function sortByRating(a,b)
{
    if(ascending)
       return parseFloat(a.rating)-parseFloat(b.rating);
    else return parseFloat(b.rating)-parseFloat(a.rating);
}
function sortByName(a,b)
{
    let nameA = a.title.toUpperCase();
    let nameB = b.title.toUpperCase();
    let retVal=0;
    if (nameA < nameB) {
        retVal=-1;
    }
    if (nameA > nameB) {
        retVal=1;
    }
    if(ascending){
        retVal=-retVal;
    }
    
    return retVal;
}