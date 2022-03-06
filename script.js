'use strict';

const modal = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelectorAll('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

// const openModal = function () {
//   for (let i = 0; i < modal.length; i++) {
//     modal[i].classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   }
// };

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    modal[i].classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

for (let i = 0; i < btnCloseModal.length; i++) {
  btnCloseModal[i].addEventListener('click', closeModal);
}

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', event => {
  console.log(event);
  //also checks if the modal is open
  for (let i = 0; i < modal.length; i++) {
    if (event.key === 'Escape' && !modal[i].classList.contains('hidden')) {
      closeModal();
    }
  }
});
