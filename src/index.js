import * as Rxjs from 'rxjs';
import  {MyService} from './myservice.service'


const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML="Click!";
const ul = document.createElement("ul");
document.body.appendChild(ul);
const input = document.createElement("input");
document.body.appendChild(input);


Rxjs.Observable.fromEvent(button, "click")
    .map(x=>MyService.findFilm(""))
    .subscribe(films => films.then(x=>console.log(x)));


function makeSearch(niz)
{
    let li;
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    niz.sort(function(a,b){
        let x = a.Title.toLowerCase();
        let y = b.Title.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
    });
    niz.forEach(element => {
        li= document.createElement("li");
        ul.appendChild(li);
        li.innerHTML=element.Title+' : Rating: '+element.imdbRating;
    });
    if(niz.length==0)
        {
            li= document.createElement("li");
            ul.appendChild(li);
            li.innerHTML="PRAZNO";
        }
}
Rxjs.Observable.fromEvent(input, "input")
    .map(x=>x.target.value)
    .switchMap(text=>MyService.findFilm(text))
    .subscribe(x=>makeSearch(x));
