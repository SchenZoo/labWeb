
import { MyService } from './myservice.service';


let params = (new URL(document.location)).searchParams;
let category = params.get("category");
console.log(category);
let container=document.getElementsByClassName("container")[0];
let films=MyService.findFilmByCategory(category);
films.then(
    films=>films.forEach(
        function(element)
        {
            let media=document.createElement('div');
            media.className="media";
            container.appendChild(media);
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
            let div=document.createElement("div");
            div.id="player";
            container.appendChild(div);
        }
    )
)