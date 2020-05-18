const menuBtn = document.querySelector('.nav__menu');
const navi = document.querySelector('.navi');

menuBtn.addEventListener('click',()=>{
    navi.classList.toggle('openNavi');
});