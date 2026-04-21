import './style.css';
import { baseRenderCatalog } from './card';
import { renderTitle } from './title.js';

const container  = document.querySelector("#content-section");
const titleContainer = document.getElementById('base-header');

const handleRoute = () => {

    if (container) {

        const adress = window.location.pathname;

        if (adress === '/test') {
            titleContainer.innerHTML = "";
            container.innerHTML = "";
            renderTest(container);
        } else {
            titleContainer.innerHTML = "";
            renderTitle();
            container.innerHTML = "";
            baseRenderCatalog(container);
        }
    }
}

handleRoute();
window.addEventListener('popstate', handleRoute);

