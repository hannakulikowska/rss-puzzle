import ElementCreator from '../../utils/elementСreator';
import { createLoginButton } from './FormButton';
import { InputField } from '../../components/InputField';
import {
  firstNameRules,
  surnameRules,
} from '../../utils/createValidationRules';

export default class FormCreator {
  private formElement: HTMLElement;

  private firstNameField: InputField;

  private surnameField: InputField;

  private loginButton: HTMLButtonElement;

  constructor() {
    this.firstNameField = new InputField('First Name', firstNameRules, () =>
      this.validateForm()
    );
    this.surnameField = new InputField('Surname', surnameRules, () =>
      this.validateForm()
    );
    this.loginButton = createLoginButton();
    this.formElement = this.createForm();
  }

  private createForm(): HTMLElement {
    const formCreator = new ElementCreator({
      tag: 'form',
      classNames: ['form'],
    });
    formCreator.addInnerElement(this.firstNameField.getField());
    formCreator.addInnerElement(this.firstNameField.getErrorContainer());
    formCreator.addInnerElement(this.surnameField.getField());
    formCreator.addInnerElement(this.surnameField.getErrorContainer());
    formCreator.addInnerElement(this.loginButton);
    return formCreator.getElement()!;
  }

  public validateForm(): void {
    const isFirstNameValid =
      this.firstNameField.getField().value.trim() !== '' &&
      !this.firstNameField.getErrorContainer().hasChildNodes();
    const isSurnameValid =
      this.surnameField.getField().value.trim() !== '' &&
      !this.surnameField.getErrorContainer().hasChildNodes();
    this.loginButton.disabled = !(isFirstNameValid && isSurnameValid);
  }

  public getFormElement(): HTMLElement {
    return this.formElement;
  }
}
