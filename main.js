const dialogButton = document.querySelector('.header__profile_button');
const dialogWindow = document.querySelector('.header__window');

dialogButton.addEventListener('click', () => {
  dialogWindow.classList.toggle('header__window_active');
  dialogButton.classList.toggle('header__profile_active');
})