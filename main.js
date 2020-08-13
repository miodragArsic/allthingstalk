$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('.nav-list').toggleClass('toggle');
    });
});

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        });
        target.classList.add('active');
    });
});

const imgOne = document.querySelector('.vec-1');
const imgTwo = document.querySelector('.vec-2');
const btnOne = document.querySelector('.page-1');
const btnTwo = document.querySelector('.page-2');
const activate = document.querySelector('.activate');
const unboxing = document.querySelector('.unboxing');

btnTwo.addEventListener('click', () => {
    imgTwo.src = 'assets/vectors/vector-2.png';
    imgOne.src = 'assets/vectors/1.png';
    activate.style.display = 'none'
    unboxing.style.display = 'block'
});

btnOne.addEventListener('click', () => {
    imgOne.src = 'assets/vectors/vector-1.png';
    imgTwo.src = 'assets/vectors/2.png';
    activate.style.display = 'block'
    unboxing.style.display = 'none'
});

const modalBtn = document.querySelector('.modal-btn');
const modalBtnTwo = document.querySelector('.modal-btn-2');
const modalVideo = document.querySelector('.video-modal');
const modalVideoTwo = document.querySelector('.video-modal-2');
const modalClose = document.querySelector('.close-btn');
const modalCloseTwo = document.querySelector('.close-btn-2');

modalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalVideo.classList.add('bg-active');
});
modalBtnTwo.addEventListener('click', (e) => {
    e.preventDefault();
    modalVideoTwo.classList.add('bg-active-2');
});
modalClose.addEventListener('click', () => {
    modalVideo.classList.remove('bg-active');
});
modalCloseTwo.addEventListener('click', () => {
    modalVideoTwo.classList.remove('bg-active-2');
});

const ul = document.querySelector('.main-container ul');
const lists = document.querySelectorAll('main-container li');

lists.forEach(list => {
    list.addEventListener('click', (e) => {
        e.preventDefault();
         ul.querySelector('.active-link').classList.remove('active-link');

         ul.classList.add('active-link');
    });
});