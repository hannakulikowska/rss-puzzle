import MainPage from '../main/MainPage';
import Button from '../../components/Button';
import { pageWrapper } from '../../app/initApp';

export const startButton = new Button({
  textContent: 'Start',
  classNames: ['start-button'],
  onClick: () => {
    const mainPageContent = new MainPage().getMainPage();
    pageWrapper.cleanWrapper();
    pageWrapper.getWrapper().appendChild(mainPageContent);
  },
});
