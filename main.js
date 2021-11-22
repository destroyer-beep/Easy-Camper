const dialogButton = document.querySelector('.header__profile_button');
const dialogWindow = document.querySelector('.header__window');
const titleButton = document.querySelector('.title__button_text');

dialogButton.addEventListener('click', () => {
  dialogWindow.classList.toggle('header__window_active');
  dialogButton.classList.toggle('header__profile_active');
})

titleButton.addEventListener('click', () => {
  document.location.href = "http://www.yandex.ru";
})


