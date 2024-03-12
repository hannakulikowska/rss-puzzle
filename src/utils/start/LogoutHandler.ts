import initApp from '../../app/initApp';

export const handleLogoutClick = () => {
  localStorage.removeItem('userEntry');
  initApp();
};
