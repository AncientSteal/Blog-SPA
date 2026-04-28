import { blogs } from '../src/mockData.js';

export function renderBlog(container, id) {
    if (container && id) {
        const blogData = blogs.find(blog => Number(blog.id) === Number(id));
        if (blogData) {
            container.innerHTML = `
                <div class="flex flex-col items-center text-neutral-600 text-lg font-normal md:mx-8 mx-0 bg-base-white py-16 md:py-24">
                    <div class="w-full">
                        <span class="text-brand-700 text-base font-semibold pb-3">Published ${blogData.createdAt}</span>
                        <h2 class="text-4xl md:text-5xl font-semibold pb-4 md:pb-6 text-neutral-900">${blogData.title}</h2>
                        <p>${blogData.short}</p>
                    </div>
                    <div class="w-full h-fit max-h-150 pt-16 overflow-hidden">
                        <img class="w-full h-full aspect-video object-cover" src=${blogData.preview} alt="Blog preview">
                    </div>
                    <div class="max-w-200 py-12 md:py-16">
                        ${renderContent(blogData.content)}
                    </div>
                    <div class="flex flex-col w-full gap-6 md:flex-row md:gap-0 md:justify-between py-6 border-t border-neutral-300">
                        <div class="flex gap-3 md:gap-4">
                            <div class="w-12 h-12 rounded-full overflow-hidden">
                                <img src="${blogData.avatar}" alt="Avatar">
                            </div>
                            <div class="flex flex-col">
                                <p class="font-semibold text-lg text-neutral-900">${blogData.author_name}</p>
                                <span>${blogData.author_label}</span>
                            </div>
                        </div>
                        <div class="text-sm h-fit px-2 rounded-full text-center bg-brand-200 text-brand-700 w-fit">${blogData.category}</div>
                    </div>
                </div>
            `;
        }
    }
};

function renderContent(array) {

    if (!array) return;
    
    if (array.length > 0) {
        return array.map(block => {
            switch (block.type) {
                case 'title': 
                    return `<h3 class="text-neutral-900 text-2xl md:text-3xl font-semibold pb-5 md:pb-6">${block.text}</h3>`;
                case 'paragraph': 
                    return `<p class="pb-4 md:pb-5">${block.text}</p>`;
                case 'image':
                    return `<figure class="mb-12">
                        <img class="pb-3 md:pb-4 pt-8" src="${block.url}" alt="Block Img">
                        <figcaption class="text-sm">${block.alt}</figcaption>
                    </figure>`;
                case 'quote':
                    return `<blockquote class="flex flex-col gap-8 mb-12 pl-5 border-l-2 border-brand-700">
                        <p class="text-neutral-900 text-xl md:text-2xl font-medium italic">${block.text}</p>
                        <span>${block.quote_author}</span>
                    </blockquote>`;
                case 'conclusion':
                    return `<div class="md:px-8 md:py-10 md:bg-neutral-50">
                        <h3 class="text-neutral-900 text-2xl md:text-3xl font-semibold pb-5 md:pb-6">Conclusion</h3>
                        ${splitText(block.conclusion_text)}
                    </div>`
                default:
                    return "";

            }
        }).join('');
    }
}

function splitText(textBlock) {
    return textBlock.split('\n').filter(p => p.trim() !== '').map(p =>
        `<p class="pb-4 md:pb-5">${p}</p>`
    ).join('');
}