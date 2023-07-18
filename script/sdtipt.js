"use strict"
let tabs = document.querySelectorAll('.tabs>.tab-header>p');
let tab_inner = document.querySelectorAll('.tabs-inner');
tabs.forEach(item => item.addEventListener("click", function (event) {
    tab_inner.forEach(item => item.classList.remove('active'));
    let classs = event.currentTarget.classList;
    document.querySelectorAll(`.${classs}`)[1].classList.add('active');
}));


const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuButton = document.querySelector('.burger-menu__button');

burgerMenuButton.addEventListener('click', function() {
  burgerMenu.classList.toggle('burger-menu--open');
});

function resetForm() {
  // сбросить значения всех select
  document.querySelectorAll('select').forEach(select => select.selectedIndex = 0);}

  const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();