import '../styles/about.css';
import { main } from "../index";
import { pizzaPage } from './pizza';


export function aboutPage(){
    main.innerHTML = ""

    let container = document.createElement('div');
        let header = document.createElement('div');
            let pizza = document.createElement('div');
            let h1 = document.createElement('h1');
            let locations = document.createElement('div');
        let description = document.createElement('div');
            let p = document.createElement('div');


container.className = "container";
header.className = "header";
description.className = "description"

pizza.textContent = "Pizza's";
h1.textContent = "About";
locations.textContent = "Locations";
p.textContent = "This site is my first attempt at using webpack. Didnt post many commits with it because I didnt want to break anything but now I feel much more comfortable with it and im excited about the prospects of using Webpack.";


main.append(container);
container.append(header);
header.append(pizza);
header.append(h1);
header.append(locations);
container.append(description);
description.append(p);


pizza.addEventListener('click',()=>{
    pizzaPage();
})












}
