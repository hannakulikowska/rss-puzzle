import LoginForm from './LoginForm';

export default class LoginPage {
  private loginForm: LoginForm;

  constructor() {
    this.loginForm = new LoginForm();
  }

  public getFormElement(): HTMLElement {
    return this.loginForm.getFormElement();
  }
}
