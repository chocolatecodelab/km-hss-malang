const cardheader = document.getElementsByClassName('card-header')[0];
const cardBody = document.getElementsByClassName('card-body')[0];
const cardheader1 = document.getElementsByClassName('card-header')[1];
const cardBody1 = document.getElementsByClassName('card-body')[1];
const loginSebagai = document.getElementsByClassName('loginSebagai')[0];
const login1 = document.getElementsByClassName('login1')[0];
const garisLogin = document.querySelector('.container.login hr');


login1.addEventListener('click', function() {
    cardheader.classList.toggle('bukaVisible');
    loginSebagai.classList.toggle('bukaVisible');
    cardheader1.classList.toggle('bukaVisible');
    garisLogin.classList.toggle('bukaVisible');
    cardBody.classList.toggle('bukaVisible'); 
    cardBody1.classList.toggle('bukaVisible');
 
})

cardheader.addEventListener('click', function() {
    cardBody.classList.toggle('bukaForm');
})
cardheader1.addEventListener('click', function() {
    cardBody1.classList.toggle('bukaForm');
})










