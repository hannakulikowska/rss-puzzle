export default interface ButtonParams {
  type: 'button' | 'submit' | 'reset';
  textContent: string;
  classNames?: string[];
  disabled?: boolean;
}
