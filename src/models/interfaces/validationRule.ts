export interface ValidationRule {
  validator: (value: string) => boolean;
  message: string;
}
