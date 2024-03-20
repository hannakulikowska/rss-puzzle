import Button from '../../components/Button';
import GameController from '../../gameLogic/GameController';

export const startButton = new Button({
  textContent: 'Start',
  classNames: ['start-button'],
  type: 'button',
  onClick: GameController.updateMainContent,
});
