import ElementCreator from '../../utils/elementСreator';

export default class Greeting {
  private greetingElement: HTMLElement;

  constructor() {
    const userEntryString = localStorage.getItem('userEntry');
    this.greetingElement = document.createElement('div');
    this.greetingElement.className = 'start__greeting-container';

    let nameGreeting;

    if (userEntryString) {
      const userEntry = JSON.parse(userEntryString);
      nameGreeting = `Hello, ${userEntry.firstName} ${userEntry.surname}!`;
    }

    const nameElement = new ElementCreator({
      tag: 'h2',
      classNames: ['start__name-greeting'],
      textContent: nameGreeting,
    }).getElement();

    const followUpElement = new ElementCreator({
      tag: 'h3',
      classNames: ['start__follow-up-text'],
      textContent:
        'Ready to puzzle out some phrases? Your adventure in English awaits!',
    }).getElement();

    this.greetingElement.appendChild(nameElement);
    this.greetingElement.appendChild(followUpElement);
  }

  public getElement(): HTMLElement {
    return this.greetingElement;
  }
}
