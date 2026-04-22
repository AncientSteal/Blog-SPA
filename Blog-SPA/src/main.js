import './style.css';
import { baseRenderCatalog } from './card';
import { renderTitle } from './title.js';
import { renderBlog } from './blog.js';
import { renderOtherBlogs } from './otherBlogs.js';
import { renderAdditionalContent } from './additionalContent.js';

const container  = document.querySelector("#content-section");
const additionalContainer = document.querySelector("#additional-container")
const titleContainer = document.getElementById('base-header');

const handleRoute = () => {

    if (container) {

        container.innerHTML = "";
        titleContainer.innerHTML = "";
        additionalContainer.innerHTML = "";

        const adress = window.location.pathname;

        if (adress.startsWith('/blog/')) {
            const id = adress.split('/').pop();
            renderBlog(container, id);
            renderOtherBlogs(additionalContainer, id);
        } else {
            renderTitle();
            baseRenderCatalog(container);
            renderAdditionalContent(additionalContainer);
        }
    }
};

handleRoute();
window.addEventListener('popstate', handleRoute);

if (container) {
    container.addEventListener('click', (e) => {
        const card = e.target.closest('[data-id]');
        if (card) {
            const id = card.dataset.id;
            window.history.pushState({}, "", `/blog/${id}`);
            handleRoute();
        }
    })
};

if (additionalContainer) {
    additionalContainer.addEventListener('click', (e) => {
        const card = e.target.closest('[data-id]');
        if (card) {
            const id = card.dataset.id;
            window.history.pushState({}, "", `/blog/${id}`);
            handleRoute();
            return;
        }
        
        if (e.target.closest('#view-all-posts')) {
            window.history.pushState({}, "", `/`);
            handleRoute();
        }
    });
};

