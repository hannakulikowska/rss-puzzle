import { createInputField } from '../utils/createInputField';
import { createErrorContainer } from '../utils/createErrorContainer';
import { updateUI } from '../utils/UpdateUI';
import { validateField } from '../utils/validateField';
import { ValidationRule } from '../models/interfaces/validationRule';

export class InputField {
  private field: HTMLInputElement;

  private errorContainer: HTMLElement;

  private rules: ValidationRule[];

  constructor(
    placeholder: string,
    rules: ValidationRule[],
    onValidate: () => void
  ) {
    this.rules = rules;
    this.field = createInputField(placeholder);
    this.errorContainer = createErrorContainer();
    const validateAndUpdate = () => {
      const errors = validateField(this.rules, this.field.value);
      updateUI(this.field, this.errorContainer, errors);
      onValidate();
    };
    this.field.addEventListener('input', validateAndUpdate);
    this.field.addEventListener('blur', validateAndUpdate);
  }

  public getField(): HTMLInputElement {
    return this.field;
  }

  public getErrorContainer(): HTMLElement {
    return this.errorContainer;
  }
}
