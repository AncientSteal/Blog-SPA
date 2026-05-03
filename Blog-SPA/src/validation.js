
export const clearErrors = (form) => {
    form.querySelectorAll('.error-text').forEach((error) => error.remove());
};

const clearSingleError = (input) => {
    if (input.nextElementSibling?.classList.contains('error-text')) {
        input.nextElementSibling.remove();
    }
};

export const errorForm = (message, input) => {
    let errorTextElement = document.createElement('span');
    errorTextElement.className = 'error-text text-red-500 text-sm font-normal mb-2';
    errorTextElement.textContent = message;
    input.after(errorTextElement);
};

export const serverAnswer = async (data) => {

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000)

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            signal: controller.signal,
        });

        if (!response.ok) {
            throw new Error(`An error occurred while sending data: ${response.status}`)
        }

        if (data.login?.toLowerCase() === 'admin') {
            return {
                status: 'error',
                errors: { login: 'This nickname is already taken' },
            }
        };

        const result = await response.json();
        return result;
    } catch (error) {
        if (error.name === 'AbortError') {
            throw new Error('Server is not responding. Please try again later.')
        }
        throw error;
    } finally {
        clearTimeout(timeout);
    }
}

const validationRules = {
    login: (value) => {
        if (value.length < 5 || value.length > 20) {
            return 'Login needs too contain from 5 to 20 characters'
        }
        return null;
    },
    
    password:  (value) => {
        if (value.length < 9 || value.length > 20) {
            return 'Passwords needs too contain from 9 to 20 characters'
        } else if (!/(?=.*[0-9])(?=.*[!$#_/\-*+=();%,.<>])/.test(value)) {
            return 'Passwords needs too contain numbers and special symbols !$#_/-*+=();%,.<>';
        }
        return null;
    },

    password_repeat: (value, originalPassword) => {
        return value !== originalPassword ? 'Passwords do not match' : null;
    },

    email: (value) => {
        if (!/(^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$)/.test(value)) {
            return 'Email needs too contain @ symbol, email token and domain';
        }
        return null;
    },

    number: (value) => {
        if (!/(^[78])(?=[0-9]{10}$)/.test(value)) {
            return 'Phone needs too contain 11 numbers and starting from 7 or 8'
        }
        return null;
    }
};

export const clearErrorInput = (formElement) => {
    formElement.addEventListener('input', (event) => {
        if (event.target.tagName === 'INPUT') {
            clearSingleError(event.target);
        }
    })
}

export const formValidation = (formElement) => {

    let isValid = true;
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);
    const { elements } = formElement;
    let passwordValue = '';

    clearErrors(formElement);

    for (const [key, value] of formData) {
        const trimmedValue = value.trim();
        const input = elements[key];
        const validateRule = validationRules[key];

        if (key === 'password') passwordValue = trimmedValue;

        if (!trimmedValue || /\s/.test(trimmedValue)) {
            errorForm('Cannot be empty or contain empty symbols', input);
            isValid = false;
            continue;
        }

        if (validateRule) {
            const errorMessage = validateRule(trimmedValue, passwordValue);
            if (errorMessage) {
                errorForm(errorMessage, input);
                isValid = false;
            } 
        }
    }

    return isValid ? data : null;
};

export function toogleBtnPhase(btn, isLoading) {
    
    if (isLoading) {
        btn.dataset.oldText = btn.innerHTML;
        btn.innerHTML = `
            <div class="flex items-center justify-center pr-2">
                <svg class="animate-spin h-4 w-4 text-white" xmlns="http://w3.org" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>
            Processing...
        `;
    } else {
        if (btn.dataset.oldText) {
            btn.innerHTML = btn.dataset.oldText;
        }
    }
}