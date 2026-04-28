export function createToast(message, type = 'success') {
    const container = document.querySelector('.toast-container');
    if (message && type && container) {
        const toast = document.createElement('div');
        toast.className = 'bg-base-white shadow-lg p-4 flex gap-2 text-neutral-900 rounded-xl animate-fade-in transition-opacity duration-500';
        toast.innerHTML = `
            <div class="flex flex-col min-w-30">
                <span class="text-xs font-bold uppercase text-brand-700">${type}</span>
                <p class="text-neutral-900">${message}</p>
            </div>
            <button class="ml-4 text-neutral-400 hover:text-neutral-900">✕</button>
        `;

        container.appendChild(toast);

        const removeToast = () => {
            toast.classList.add('opacity-fade');
            setTimeout(() => toast.remove(), 500)
        };

        const timer = setTimeout(removeToast, 3000);

        toast.querySelector('button').addEventListener('click', () => {
            clearTimeout(timer);
            removeToast();
        });
    }
};