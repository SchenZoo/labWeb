import { MyService } from "./myservice.service";


let params = (new URL(document.location)).searchParams;
let id = params.get("id");
let container=document.getElementsByClassName("container")[0];
let film=MyService.findFilmByID(id);
film.then(
    element=>{
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
            p=document.createElement("p");
            p.innerHTML="Year:  "+element.Year;
            mediaBody.appendChild(p);
            p=document.createElement("p");
            p.innerHTML="Production:  "+element.Production;
            mediaBody.appendChild(p);
            if(element.Website!="N/A")
            {
            a=document.createElement("a");
            a.innerHTML="Official website";
            a.href=element.Website;
            mediaBody.appendChild(a);
            }
            p=document.createElement("p");
            p.innerHTML="Story: "+element.Plot;
            mediaBody.appendChild(p);

            a=document.createElement("a");
            a.innerHTML=`${element.Title} Trailer`;
            a.href=`https://www.youtube.com/watch?v=${element.YT}`;
            mediaBody.appendChild(a);
        }
    );

