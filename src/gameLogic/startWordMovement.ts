export function startWordMovement(
  wordElement: HTMLElement,
  targetContainer: HTMLElement
): void {
  const targetRect = targetContainer.getBoundingClientRect();
  const wordRect = wordElement.getBoundingClientRect();

  const containerStyle = getComputedStyle(targetContainer);
  let startX = parseFloat(containerStyle.paddingLeft);
  let startY = parseFloat(containerStyle.paddingTop);

  const lastElement = targetContainer.lastElementChild;
  if (lastElement) {
    const lastElementRect = lastElement.getBoundingClientRect();
    startX =
      lastElementRect.right -
      targetRect.left +
      parseFloat(containerStyle.paddingLeft);
    startY =
      lastElementRect.top -
      targetRect.top +
      parseFloat(containerStyle.paddingTop);
  }

  const translateX = startX - (wordRect.left - targetRect.left);
  const translateY = startY - (wordRect.top - targetRect.top);

  wordElement.style.transition = 'transform 0.5s ease-in-out';
  wordElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
  setTimeout(() => {
    wordElement.style.transition = '';
    wordElement.style.transform = '';
    targetContainer.appendChild(wordElement);
  }, 500);
}
