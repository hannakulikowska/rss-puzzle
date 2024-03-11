import SubmitButton from '../../components/SubmitButton';

export const createLoginButton = () => {
  return SubmitButton({
    type: 'submit',
    textContent: 'Login',
    classNames: ['form__button'],
    disabled: true,
  });
};
