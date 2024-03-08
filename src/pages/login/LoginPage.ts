import ElementCreator from '../../utils/elementСreator';
import { createInputField } from './createInputField';
import { loginButton } from './createLoginButton';

export default class LoginPage {
  private formElement: HTMLElement;

  constructor() {
    this.formElement = this.createFormElements();
  }

  private createFormElements(): HTMLElement {
    const formCreator = new ElementCreator({
      tag: 'form',
      classNames: ['login-form'],
    });
    const firstNameInput = createInputField('First Name');
    formCreator.addInnerElement(firstNameInput);

    const surnameInput = createInputField('Surname');
    formCreator.addInnerElement(surnameInput);

    formCreator.addInnerElement(loginButton);

    const formElement = formCreator.getElement();
    if (!formElement) {
      throw new Error('Failed to create the form element.');
    }
    return formElement;
  }

  public getFormElement(): HTMLElement {
    return this.formElement;
  }
}
