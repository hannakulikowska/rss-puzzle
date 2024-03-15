export default interface ButtonParams {
  textContent: string;
  classNames?: string[];
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  onClick?: (event: Event) => void;
}
