import FormCreator from './FormCreator';

export default class LoginForm {
  private formCreator: FormCreator;

  constructor() {
    this.formCreator = new FormCreator();
  }

  public getFormElement(): HTMLElement {
    return this.formCreator.getFormElement();
  }
}
