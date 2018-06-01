var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var planButtons = document.querySelectorAll('.plan .button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
// var OpenModalButton = document.getElementById('yes');
var CloseModalButton = document.getElementById('no');

console.log(planButtons);

backdrop.addEventListener('click',() => {
    mobileNav.style.display = 'none';
    backdrop.style.display = 'none';
    modal.style.display = 'none';
})

planButtons.forEach(planButton => {
    planButton.addEventListener('click',() => {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
});

toggleButton.addEventListener('click',() => {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});

CloseModalButton.addEventListener('click',function(){
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})