import './style.css';
import { baseRenderCatalog } from './card';
import { renderTitle } from './title.js';
import { renderBlog } from './blog.js';
import { renderOtherBlogs } from './otherBlogs.js';
import { renderAdditionalContent } from './additionalContent.js';
import { renderLoginPage } from './login.js';
import { renderRegistrationPage } from './registration.js';
import { clearErrorInput } from './validation.js';
import { formValidation } from './validation.js';
import { serverAnswer } from './validation.js';
import { toogleBtnPhase } from './validation.js';
import { errorForm } from './validation.js';
import { clearErrors } from './validation.js';
import { createToast } from './toasts.js';

const container  = document.querySelector("#content-section");
const additionalContainer = document.querySelector("#additional-container")
const titleContainer = document.getElementById('base-header');
const navMenu = document.querySelector('nav');

const handleRoute = () => {

    if (container) {

        container.innerHTML = "";
        titleContainer.innerHTML = "";
        additionalContainer.innerHTML = "";

        const adress = window.location.pathname;

        const initForm = (renderEl, onSuccess) => {
            renderEl(container);
            const form = container.querySelector('form');
            if (!form) return;

            clearErrorInput(form);

            form.addEventListener('submit', async (event) => {
                event.preventDefault();

                const submitBtn = form.querySelector('button[type="submit"]');

                const data = formValidation(form);

                if (data) {
                    const btns = form.querySelectorAll('button');
                    btns.forEach(b => b.disabled = true);

                    try {
                        toogleBtnPhase(submitBtn, true)
                        const result = await serverAnswer(data);
                        if (result.status === 'error') {
                            Object.entries(result.errors).forEach(([fieldName, message]) => {
                                const input = form.querySelector(`[name="${fieldName}"]`);
                                errorForm(message, input);
                            });
                        } else {
                            onSuccess(data, result);
                            form.reset();
                        }
                    } catch (error) {
                        createToast(error.message, 'error');
                    } finally {
                        btns.forEach(b => b.disabled = false);
                        toogleBtnPhase(submitBtn, false)
                    }
                }
            });
            
        }

        if (adress.startsWith('/blog/')) {
            const id = adress.split('/').pop();
            renderBlog(container, id);
            renderOtherBlogs(additionalContainer, id);
        } else if (adress.startsWith('/login')) {
            initForm(renderLoginPage, (data) => {
                createToast(`Добро пожаловать, ${data.login}!`);
                window.history.pushState({}, "", `/`);
                handleRoute();
            });
        } else if (adress.startsWith('/registration')) {
            initForm(renderRegistrationPage, (data) => {
                createToast(`Регистрация пользователя ${data.email} успешна!`);
                window.history.pushState({}, "", `/`);
                handleRoute();
            });
        } else {
            renderTitle();
            baseRenderCatalog(container);
            renderAdditionalContent(additionalContainer);
        }
    }

    activeLinkShow();
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

document.addEventListener('click', (e) => {

    if (e.target.classList.contains('login-btn')) {
        window.history.pushState({}, "", `/login`);
        handleRoute();
    } else if (e.target.classList.contains('registration-btn')) {
        window.history.pushState({}, "", `/registration`);
        handleRoute();
    }

    const link = e.target.closest('[data-id]');

    if (link && (link.dataset.id === 'homelink')) {
        e.preventDefault();
        window.history.pushState({}, "", `/`);
        handleRoute();
    }

    const trigger = e.target.closest('[data-trigger]');

    if (trigger) {
        e.preventDefault();
        const triggerName = trigger.dataset.trigger;
        const targets = document.querySelectorAll(`[data-target="${triggerName}"]`)
        const svgTargets = document.querySelectorAll(`[data-svg="${triggerName}"]`)

        targets.forEach((target) => {
            target.classList.toggle('hidden');
            target.classList.toggle('flex');
        })

        svgTargets.forEach((svg) => {
            svg.classList.toggle('rotate-180');
        });
        return;
    }

    const allTargets = document.querySelectorAll(`[data-target]`);
    allTargets.forEach((target) => {
        target.classList.remove('flex');
        target.classList.add('hidden');
    });

    const allSvgTargets = document.querySelectorAll('[data-svg]');
    allSvgTargets.forEach((svg) => {
        svg.classList.remove('rotate-180')
    })
});

function activeLinkShow() {
    const path = window.location.pathname;

    if (navMenu) {
        const allLinks = navMenu.querySelectorAll('[data-id]');

        allLinks.forEach((link) => {
            link.classList.remove('bg-brand-200', 'px-2', 'rounded-full');
            const idLink = link.dataset.id;

            if (path === '/' && idLink === 'homelink') {
                link.classList.add('bg-brand-200', 'px-2', 'rounded-full');
            }
        });
    }  
};



