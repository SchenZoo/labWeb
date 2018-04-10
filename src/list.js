import { MyService } from './myservice.service';
import './index';
import * as Rxjs from 'rxjs'
let sorting=sortByRating;
let radios=document.getElementsByName('choice');
let radio1=radios[0];
let radio2=radios[1];
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
let container=document.getElementsByClassName("container")[0];
let div=document.createElement('div');
container.appendChild(div);
show();
function show()
{
films.subscribe(
    filmz=>{
        filmz.sort(sorting);
         while(div.firstChild)
         div.removeChild(div.firstChild);//delete old films
        filmz.forEach(
        function(element)
        {
            let media=document.createElement('div');
            media.className="media";
            div.appendChild(media);
            let a=document.createElement("a");
            a.className="d-flex align-self-center";
            a.href=`film.html?id=${element.imdbID}`;
            media.appendChild(a);
            let img=document.createElement("img");
            img.src=element.Poster;
            img.alt=element.Title;
            a.appendChild(img);

            let mediaBody=document.createElement('div');
            mediaBody.className="media-body";
            let head=document.createElement("h5");
            head.innerHTML=element.Title;
            media.appendChild(mediaBody);
            mediaBody.appendChild(head);
            let p=document.createElement("p");
            p.innerHTML="Actors:  "+element.Actors;
            mediaBody.appendChild(p);
            p=document.createElement("p");
            p.innerHTML="Genre:  "+element.Genre;
            mediaBody.appendChild(p);
            p=document.createElement("p");
            p.innerHTML="Rating:  "+element.imdbRating;
            mediaBody.appendChild(p);
        }
    )}
);
}


function sortByRating(a,b)
{
    return b.imdbRating-a.imdbRating;
}
function sortByName(a,b)
{
    let nameA = a.Title.toUpperCase();
    let nameB = b.Title.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
}