import { PageWrapper } from '../components/PageWrapper';
import LoginPage from '../pages/login/LoginPage';
import StartPage from '../pages/start/StartPage';
import Header from '../components/Header';

const pageWrapper = new PageWrapper();

export default function initApp() {
  pageWrapper.cleanWrapper();

  if (localStorage.getItem('userEntry')) {
    const header = new Header().getHeader();
    const startPage = new StartPage();
    pageWrapper.getWrapper().removeAttribute('id');
    pageWrapper.getWrapper().setAttribute('id', 'start');
    pageWrapper.getWrapper().appendChild(header);
    pageWrapper.getWrapper().appendChild(startPage.getContent());
  } else {
    const loginPage = new LoginPage();
    pageWrapper.getWrapper().appendChild(loginPage.getContent());
    pageWrapper.getWrapper().setAttribute('id', 'login');
  }
  document.body.prepend(pageWrapper.getWrapper());
}
