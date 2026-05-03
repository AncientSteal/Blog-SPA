export function dateToFormat(dateString) {
    if (!dateString) return '';

    const date = new Date(dateString);

    if (isNaN(date.getTime())) return 'Invalid date';

    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }

    return new Intl.DateTimeFormat('en-US', options).format(date);
};