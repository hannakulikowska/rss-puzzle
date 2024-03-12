import initApp from '../app/initApp';

export default class FormSubmitHandler {
  constructor(
    private formElement: HTMLElement,
    private firstNameField: HTMLInputElement,
    private surnameField: HTMLInputElement
  ) {
    this.setupSubmitListener();
  }

  private setupSubmitListener(): void {
    this.formElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const userData = {
        firstName: this.firstNameField.value,
        surname: this.surnameField.value,
      };
      localStorage.setItem('userEntry', JSON.stringify(userData));
      initApp();
    });
  }
}
