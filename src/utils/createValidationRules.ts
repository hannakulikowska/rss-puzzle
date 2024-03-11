import { ValidationRule } from '../models/interfaces/validationRule';

function createValidationRules(minLength: number): ValidationRule[] {
  return [
    {
      validator: (value: string) => value.length >= minLength,
      message: `Minimum ${minLength} letters`,
    },
    {
      validator: (value: string) => /^[A-Z]/.test(value) && value[0] !== '-',
      message: 'The first letter is in uppercase',
    },
    {
      validator: (value: string) => /^[A-Za-z-]+$/.test(value),
      message: 'English alphabet letters or the hyphen',
    },
  ];
}

export const firstNameRules = createValidationRules(3);
export const surnameRules = createValidationRules(4);
