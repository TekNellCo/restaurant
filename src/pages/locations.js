import '../styles/locations.css';
import nyImg from '../images/ny.jpg';
import japanImg from '../images/japan.jpg';
import romeImg from '../images/rome.jpg'
import { main } from '../index'
import { aboutPage } from './about';
import { pizzaPage } from './pizza';



export function locationsPage(){
    main.innerHTML = ""
    let container = document.createElement('div');
        let header = document.createElement('div');
            let about = document.createElement('div');
            let h1 = document.createElement('h1');
            let pizza = document.createElement('div');
        let body = document.createElement('div');
            let left = document.createElement('div');
                let ny = new Image();
                let japan = new Image();
                let rome = new Image();
            let right = document.createElement('div');
                let p = document.createElement('p');

ny.src = nyImg;
japan.src = japanImg;
rome.src = romeImg;


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

pizza.addEventListener('click',()=>{
    pizzaPage();
})
about.addEventListener('click',()=>{
    aboutPage();
})




}