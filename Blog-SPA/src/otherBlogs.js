import { blogs } from './mockData.js';

export function renderOtherBlogs(additionalContainer, id) {
    if (additionalContainer && id) {
        const blogsArray = blogs.filter(blog => Number(blog.id) !== Number(id)).slice(0, 3);

        const lastestBlogs = document.createElement('div');
        lastestBlogs.innerHTML = `
            <div class="md:px-8 md:py-24 border-b border-neutral-300">
                <div class="flex flex-col md:items-center md:flex-row gap-12 md:gap-0 justify-between">
                    <div class="flex flex-col gap-4 md:gap-5">
                        <span class="text-base text-brand-700 font-semibold">Our blog</span>
                        <h3 class="text-neutral-900 font-semibold text-3xl md:text-4xl">Lastest blog posts</h3>
                        <p>Tool and strategies modern teams need to help their companies grow.</p>
                    </div>
                    <button id="view-all-posts" class="bg-brand-700 text-base-white">View all posts</button>
                </div>
                <div class="grid md:grid-cols-3 md:gap-8 grid-cols-1 gap-12 pt-12 md:pt-16">
                    ${renderBlogs(blogsArray)}
                </div>
            </div>
            <div class="flex flex-col md:flex-row gap-16 py-12 md:py-24 md:px-8">
                <div class="flex flex-1 flex-col gap-4 md:gap-6 justify-center">
                    <h3 class="text-neutral-900 font-semibold text-3xl md:text-5xl md:text-12">No long-term contracts.<br>No catches.</h3>
                    <p>Start your 30-day free trial today.</p>
                    <div class="flex flex-col md:flex-row gap-3 md:w-fit w-full pt-4">
                        <button class="text-neutral-600 border border-neutral-300 w-full text-center md:w-fit">Learn more</button>
                        <button class="text-base-white bg-brand-700 w-full text-center md:w-fit">Get started</button>
                    </div>
                </div>
                <div class="flex flex-col flex-1 gap-4 md:justify-between overflow-hidden">
                    <div class="flex gap-4 h-fit justify-center">
                        <img class="w-fit h-fit mt-auto" src="/projects-demo/Image2.png" alt="Other projects demo">
                        <img class="w-fit h-fit" src="/projects-demo/Image3.png" alt="Other projects demo">
                    </div>
                    <div class="flex gap-4 h-fit justify-center">
                        <img class="w-fit h-fit" src="/projects-demo/Image1.png" alt="Other projects demo">
                        <img class="w-fit h-fit" src="/projects-demo/Image5.png" alt="Other projects demo">
                        <img class="w-fit h-fit" src="/projects-demo/Image4.png" alt="Other projects demo">
                    </div>
                </div>
            </div>
        `;
        additionalContainer.appendChild(lastestBlogs);
    }
}

function renderBlogs(array) {
    if (array) {
        return array.map(e => {
            return `
                <div class="flex flex-col gap-8 px-6 pt-6 pb-8 bg-base-white shadow-lg" data-id="${e.id}">
                    <img class="aspect-3/2 object-cover" src="${e.preview}" alt="Blog preview">
                    <div class="flex flex-col gap-3">
                        <span class="text-brand-700 text-sm">${e.category}</span>
                        <h3 class="text-neutral-900 text-xl">${e.title}</h3>
                        <p class="text-neutral-600 text-base">${e.short}</p>
                    </div>
                    <div class="flex gap-3">
                        <div class="w-10 h-10 rounded-full overflow-hidden">
                            <img class="w-full h-full" src="${e.avatar}" alt="Avatar">
                        </div>
                        <div>
                            <p class="text-neutral-900 font-semibold text-sm">${e.author_name}</p>
                            <span class="text-neutral-600 text-sm font-normal">${e.createdAt}</span>
                        </div>
                    </div>
                </div>
            `
        }).join('');
    }
}