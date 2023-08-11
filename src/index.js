
import './styles/main.css';
import {pizzaPage} from './pages/pizza.js'
import {aboutPage} from './pages/about.js';
import { locationsPage } from './pages/locations';


export const main = document.getElementById('content');

createMain();
export function createMain(){
    let maincontainer = document.createElement("div");
    let welcome = document.createElement("h1");
    let browsercontainer = document.createElement("div");
    let pizza = document.createElement("div");
    let about = document.createElement("div");
    let location = document.createElement("div");

    pizza.addEventListener('click',()=>{
        pizzaPage();
    })
    about.addEventListener('click',()=>{
        aboutPage();
    })
    location.addEventListener('click',()=>{
        locationsPage();
    })


    welcome.textContent = "Welcome";
    pizza.textContent = "Pizzas";
    about.textContent = "About US";
    location.textContent = "Locations";

    maincontainer.className = 'maincontainer';
    browsercontainer.className ='browsercontainer';
    pizza.className = "btn pizza";
    about.className ="btn aboutus";
    location.className= "btn locations";

    main.append(maincontainer);
    maincontainer.append(welcome);
    maincontainer.append(browsercontainer);
    browsercontainer.append(pizza);
    browsercontainer.append(about);
    browsercontainer.append(location);

    // location.addEventListener('click',locationPage())

}







