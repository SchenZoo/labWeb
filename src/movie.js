export class Movie
{
    constructor(title,genre,year,id,actors,plot,rating,production,website,poster,ytID)
    {
        this.title=title;
        this.genre=genre;
        this.year=year;
        this.id=id;
        this.actors=actors;
        this.plot=plot;
        this.rating=rating;
        this.production=production;
        this.website=website;
        this.poster=poster;
        this.ytID=ytID;
    }
    makeAsSearchItem()
    {
        let img = document.createElement("img");
        img.src = this.poster;
        img.className ="img-responsive img-rounded";
        img.style="max-height: 50px; max-width: 50px;";
        let li=document.createElement('li');
        let a =document.createElement("a");
        a.href=`film.html?id=${this.id}`;
        li.appendChild(a);
        a.appendChild(img);
        let span = document.createElement("span");
        span.innerHTML=this.title;
        
        li.className="dropdown-item text-primary clickable my-2";
        

        a.appendChild(span);
        return li;
    }
    makeFullDescription()
    {
        let media=this.makeShortDescription();
        let mediaBody=media.getElementsByClassName('media-body')[0];
        let p=document.createElement("p");
        p.innerHTML="Year:  "+this.year;
        mediaBody.appendChild(p);
        p=document.createElement("p");
        p.innerHTML="Production:  "+this.production;
        mediaBody.appendChild(p);
        if(this.website!="N/A")
        {
        let a=document.createElement("a");
        a.innerHTML="Official website";
        a.href=this.website;
        mediaBody.appendChild(a);
        }
        p=document.createElement("p");
        p.innerHTML="Story: "+this.plot;
        mediaBody.appendChild(p);

        return media;
    }
    makeShortDescription()
    {
        let media=document.createElement('div');
        media.className="media";
        let a=document.createElement("a");
        a.className="d-flex align-self-center";
        a.href=`film.html?id=${this.id}`;
        media.appendChild(a);
        let img=document.createElement("img");
        img.src=this.poster;
        img.alt=this.title;
        a.appendChild(img);

        let mediaBody=document.createElement('div');
        mediaBody.className="media-body";
        let head=document.createElement("h5");
        head.innerHTML=this.title;
        media.appendChild(mediaBody);
        mediaBody.appendChild(head);
        let p=document.createElement("p");
        p.innerHTML="Actors:  "+this.actors;
        mediaBody.appendChild(p);
        p=document.createElement("p");
        p.innerHTML="Genre:  "+this.genre;
        mediaBody.appendChild(p);
        p=document.createElement("p");
        p.innerHTML="Rating:  "+this.rating;
        mediaBody.appendChild(p);
        
        return media;
    }
}