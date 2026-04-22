import { blogs } from '../src/mockData.js';

const blogsSection = document.getElementById('content-section');

export function baseRenderCatalog(blogsSection) {

    if (blogsSection) {

        let loadedCards = 0;

        const baseOfCatalog = document.createElement('div');

        baseOfCatalog.innerHTML = `
            <div  class="card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-8">
            </div>
            <div class="mb-16 md:mb-24 md:px-8 pt-12 md:pt-16 flex justify-center w-full">
                <button class="load__btn flex gap-3 justify-center items-center bg-brand-50 font-semibold text-base text-brand-700 py-3 md:px-5 w-full md:w-fit">
                <div class="flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.7.8v11.7M6.7 12.5l5.8-5.8M6.7 12.5l-5.9-5.8" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                Load more
                </button>
            </div>
        `;

        blogsSection.appendChild(baseOfCatalog);

        const loadMoreBtn = document.querySelector('.load__btn');
        const cardContainer = document.querySelector('.card_container');

        function renderCards(count, cardArray = blogs) {

            const nextCards = cardArray.slice(loadedCards, loadedCards + count);

            nextCards.forEach(blog => {

                if (!cardContainer) return;

                const blogCard = document.createElement('div');

                blogCard.innerHTML = `
                    <div class="flex flex-col gap-8 px-6 pt-6 pb-8 bg-base-white shadow-lg" data-id="${blog.id}">
                        <img class="aspect-3/2 object-cover" src="${blog.preview}" alt="Blog preview">
                        <div class="flex flex-col gap-3">
                            <span class="text-brand-700 text-sm">${blog.category}</span>
                            <h3 class="text-neutral-900 text-xl">${blog.title}</h3>
                            <p class="text-neutral-600 text-base">${blog.short}</p>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-10 h-10 rounded-full overflow-hidden">
                                <img class="w-full h-full" src="${blog.avatar}" alt="Avatar">
                            </div>
                            <div>
                                <p class="text-neutral-900 font-semibold text-sm">${blog.author_name}</p>
                                <span class="text-neutral-600 text-sm font-normal">${blog.createdAt}</span>
                            </div>
                        </div>
                    </div>
                `;

                cardContainer.appendChild(blogCard);
            });

            loadedCards += nextCards.length;

            loadMoreBtn.style.display = loadedCards >= cardArray.length ? 'none' : 'flex';
        }

        if (cardContainer && blogs.length > 0) {
            renderCards(6, blogs);
        }

        let currentArray = blogs;

        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                renderCards(3, currentArray);
            })
        }

        const searchInput = document.querySelector('.search__input');

        if (searchInput && cardContainer) {
            searchInput.addEventListener('input', (e) => {
                
                let value = e.target.value.toLowerCase().trim();

                const filtered = blogs.filter(blog => {
                    const searchString = `
                        ${blog.author_name} 
                        ${blog.category} 
                        ${blog.createdAt} 
                        ${blog.title} 
                        ${blog.short}
                    `.toLowerCase();
                    return searchString.includes(value);
                });

                cardContainer.innerHTML = "";
                loadedCards = 0;

                if (value === "") {
                    currentArray = blogs;
                    renderCards(6, currentArray);

                } else if (filtered.length > 0) {
                    currentArray = filtered;
                    renderCards(6, currentArray);
                } else {
                    currentArray = [];
                    cardContainer.innerHTML = `
                        <div class="p-12 bg-base-white shadow-lg text-xl col-span-full">
                            <p class="text-neutral-900 font-normal text-center">We do not find any results for 
                                <span class="text-brand-700 font-bold">${value}</span>
                            </p>
                        </div>
                    `
                    loadMoreBtn.style.display = 'none';
                }
            })
        };
    };
};