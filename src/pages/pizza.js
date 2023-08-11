import '../styles/pizza.css';
import { main } from "../index";
import cheese from '../images/cheese.jpg';
import pepp from '../images/pepperonni.jpg';
import choc from '../images/chocolate.jpg';




export function pizzaPage(){
    main.innerHTML = ""
    let container = document.createElement('div');
        let header = document.createElement('div');
            let locations = document.createElement('div');
            let h1 = document.createElement('h1');
            let about = document.createElement('div');
        let pizzaContainer = document.createElement('div');
            let one = document.createElement('div');
                let cheeseImg = new Image();
                let cheeseP = document.createElement('p');
            let two = document.createElement('div');
                let peppImg = new Image();
                let peppP = document.createElement('p');
            let three = document.createElement('div');
                let chocImg = new Image();
                let chocP = document.createElement('p');


cheeseImg.src = cheese;
peppImg.src = pepp;
chocImg.src = choc;

container.className = "container";
header.className = "header";
locations.className = "locations";
about.className = "about";
pizzaContainer.className = "pizzacontainer";

locations.textContent = "Locations";
h1.textContent = "Pizza's";
about.textContent = "About";
cheeseP.textContent = "Delicious Cheese : cheese pizza with a bountiful crust topped with cheese that makes you wanna slap your momma silly ";
peppP.textContent = "Delicious Pepperonni : Let's face it, you believe cheese is for simpletons and you want something with more meat on it. Pepperonni is the choice for you.";
chocP.textContent = "Delicious Chocolate : For that inner child. Who cares what anybody thinks and if they judge you, good, they cant have a slice anyways!";


main.append(container);
container.append(header);
header.append(locations);
header.append(h1);
header.append(about);
container.append(pizzaContainer);
pizzaContainer.append(one);
one.append(cheeseImg);
one.append(cheeseP);
pizzaContainer.append(two);
two.append(peppImg);
two.append(peppP);
pizzaContainer.append(three);
three.append(chocImg);
three.append(chocP);












}