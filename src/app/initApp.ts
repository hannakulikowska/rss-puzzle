import { PageWrapper } from '../components/PageWrapper';
import LoginPage from '../pages/login/LoginPage';
import StartPage from '../pages/start/StartPage';

const pageWrapper = new PageWrapper();

export default function initApp() {
  if (localStorage.getItem('userEntry')) {
    pageWrapper.cleanWrapper();
    pageWrapper.getWrapper().setAttribute('id', 'start-wrapper');
    const startPage = new StartPage();
    pageWrapper.getWrapper().appendChild(startPage.getHeaderElement());
  } else {
    pageWrapper.cleanWrapper();
    pageWrapper.getWrapper().setAttribute('id', 'login-wrapper');
    const loginPage = new LoginPage();
    pageWrapper.getWrapper().appendChild(loginPage.getFormElement());
  }
  document.body.prepend(pageWrapper.getWrapper());
}
