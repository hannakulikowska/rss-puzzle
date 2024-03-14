import LoginForm from './LoginForm';

export default class LoginPage {
  private loginForm: LoginForm;

  constructor() {
    this.loginForm = new LoginForm();
  }

  public getContent(): HTMLElement {
    return this.loginForm.getFormElement();
  }
}
