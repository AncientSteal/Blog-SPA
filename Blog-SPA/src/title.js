export function renderTitle() {
    const container = document.getElementById('base-header');

    if (container) {
        const titleElement = document.createElement('div');
        titleElement.innerHTML = `
            <div class="flex flex-col justify-center items-center py-16 md:py-24">
                <div class="rounded-full bg-brand-100 text-brand-700 text-sm font-medium py-1 px-3 mb-4">Our blog</div>
                <h1 class="text-brand-900 font-semibold text-4xl md:text-5xl mb-4 md:mb-6 text-center">Resources and insights</h1>
                <p class="text-brand-700 font-normal text-lg md:text-xl mb-8 md:mb-10 text-center">The latest industry news, interviews, technologies, and resources.</p>
                <search role="search" class="block">
                <div class="relative flex items-center">
                    <div class="absolute left-0 items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    </div>
                    <input type="search" placeholder="Search" class="search__input flex justify-start bg-base-white py-3 pl-10 pr-4 text-base rounded-lg border-1 border-neutral-300">
                </div>
                </search>
            </div>
            <div class="absolute -top-[30vh] -left-[20vw] -z-1">
                <div class="bg-brand-50 w-[150vw] md:h-[90vh] h-[70vh] rotate-350 absolute z-2"></div>
                <div class="bg-brand-100 w-[150vw] md:h-[100vh] h-[75vh] rotate-350 absolute z-1"></div>
                <div class="bg-brand-300 w-[150vw] md:h-[110vh] h-[80vh] rotate-350 absolute z-0"></div>
            </div>
        `;

        container.appendChild(titleElement);
    }
}



