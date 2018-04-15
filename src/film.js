import { MyService } from "./myservice.service";
import './component';
import { Movie } from "./movie";


let params = (new URL(document.location)).searchParams;
let id = params.get("id");
const  YTPlayer = require('yt-player');
let myMovie;
let container=document.getElementsByClassName("container")[0];
let film=MyService.findFilmByID(id);
film.then(
    movie=>{
        myMovie=new Movie(movie.Title,movie.Genre,movie.Year,movie.imdbID,movie.Actors,movie.Plot,movie.imdbRating,movie.Production,movie.Website,movie.Poster,movie.YT);
        
            container.appendChild(myMovie.makeFullDescription());
            let play=document.createElement("div");
            play.id='player';
            container.appendChild(play);
            const player=new YTPlayer("#player");
            player.load(myMovie.ytID);
        }
    );

