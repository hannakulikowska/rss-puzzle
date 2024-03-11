import { ValidationError } from '../models/interfaces/validationError';

export const updateUI = (
  field: HTMLInputElement,
  errorContainer: HTMLElement,
  errors: ValidationError[]
): void => {
  errorContainer.innerHTML = '';
  if (errors.length > 0) {
    field.classList.add('error-background');
    errors.forEach(({ message, iconType }) => {
      const errorElement = document.createElement('p');
      errorElement.classList.add('form__error-text');
      const iconSpan = document.createElement('span');
      iconSpan.classList.add(
        iconType === 'error' ? 'icon-cancel' : 'icon-success'
      );
      errorElement.textContent = message;
      errorElement.prepend(iconSpan);
      errorContainer.appendChild(errorElement);
    });
  } else {
    field.classList.remove('error-background');
  }
};
