import { PageWrapper } from '../components/PageWrapper';
import LoginPage from '../pages/login/LoginPage';

export default function initApp() {
  const pageWrapper = new PageWrapper({
    classNames: ['app-wrapper', 'login-page-wrapper', 'background-image'],
  });
  const loginPage = new LoginPage();

  pageWrapper.getWrapper().appendChild(loginPage.getFormElement());
  document.body.prepend(pageWrapper.getWrapper());
}
