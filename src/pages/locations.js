import '../styles/locations.css';
import ny from '../images/ny.jpg';
import japan from '../images/japan.jpg';
import rome from '../images/rome.jpg';
import { main } from '../index'
import { aboutPage } from './about';
import { pizzaPage } from './pizza';



export function locationsPage(){
    main.innerHTML = ""
    let container = document.createElement('div');
        let header = document.createElement('div');
            let about = document.createElement('h1');
            let h1 = document.createElement('div');
            let pizza = document.createElement('div');
        let body = document.createElement('div');
            let left = document.createElement('div');
                let ny = new Image();
                let japan = new Image();
                let rome = new Image();
            let right = document.createElement('div');
                let p = document.createElement('p');

ny.src = ny;
japan.src = japan;
rome.src = rome;


container.className = "container";
header.className = "header";
body.className = "body";
left.className = "left";
right.className = "right";

about.textContent = "About";
h1.textContent = "Locations";
pizza.textContent = "Pizza";
p.textContent = "We are spread out across the globe with locations in Florida, New York, Rome, Egypt, Japan and much much more!";

main.append(container);
container.append(header);
header.append(about);
header.append(h1);
header.append(pizza);
container.append(body);
body.append(left);
left.append(ny);
left.append(japan);
left.append(rome);
body.append(right);
right.append(p);






}