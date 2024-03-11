import { ValidationRule } from '../models/interfaces/validationRule';
import { ValidationError } from '../models/interfaces/validationError';

export const validateField = (
  rules: ValidationRule[],
  value: string
): ValidationError[] => {
  if (value.length === 0) {
    return [{ message: 'The field cannot be empty', iconType: 'error' }];
  }

  return rules.reduce((errors, rule) => {
    if (!rule.validator(value)) {
      errors.push({ message: rule.message, iconType: 'error' });
    }
    return errors;
  }, [] as ValidationError[]);
};
