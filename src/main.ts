import './styles/style.scss';
import { PageWrapper } from './components/PageWrapper';
import LoginPage from './pages/login/LoginPage';

const pageWrapper = new PageWrapper({
  classNames: ['login-page-wrapper', 'background-image'],
});
const loginPage = new LoginPage();

pageWrapper.getWrapper().appendChild(loginPage.getFormElement());
document.body.prepend(pageWrapper.getWrapper());
