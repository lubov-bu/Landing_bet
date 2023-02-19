const popup = document.querySelector('.wrapper__popup');
const popupButton = document.querySelector('.popup__button');
const textMessage = document.querySelector('.popup__h1');
const textPhar = document.querySelector('.popup__ph');

function showPopup () {
    console.log("hello");
    popup.classList.toggle("invisible");
}

function nextText () {
    textPhar.classList.add("invisible");
    textMessage.innerText = "OH, NO HAY SUERTE AHORA";
    popupButton.innerText = "GIRAR DE NUEVO"
}