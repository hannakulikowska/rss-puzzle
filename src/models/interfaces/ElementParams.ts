export interface ElementParams {
  tag: keyof HTMLElementTagNameMap;
  classNames?: string[];
  id?: string;
  textContent?: string;
  callback?: (event: Event) => void;
  attributes?: { [key: string]: string };
}
