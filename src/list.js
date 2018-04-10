import * as Rxjs from 'rxjs';
import {interval} from 'rxjs/observable/interval'

const div = document.createElement("div");
document.body.appendChild(div);
const obs1 = Rxjs.Observable.create(generator => {

	setInterval(() => {
	const broj = parseInt(Math.random() * 6);
    generator.next(broj)
}, 1000);
	
})
.subscribe(num => {
	console.log(num);
	div.innerHTML = num;
});

const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML="STOP";
button.onclick= () => obs1.unsubscribe();

interval(800)
    .map( num => parseInt(Math.random()*10))
    .take(4) // uzme samo 4 broja sa seed-a
    .subscribe( num => console.log('from interval', num));

