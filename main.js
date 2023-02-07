const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.cursos');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('showText');
  });
});