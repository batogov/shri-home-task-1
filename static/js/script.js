var popup = document.querySelector('.popup');
var popupBack = document.querySelector('.popup__back');
var popupClose = document.querySelector('.popup__close');
var imageWrapper = popup.querySelector('.popup__img-wrapper');
var images = document.querySelectorAll('.gallery-item');

function onImageClick(event) {
    event.preventDefault();
    
    var image = document.createElement('img');
    image.src = 'static/img/' + this.dataset.img;
    
    imageWrapper.appendChild(image);
    popup.classList.remove('popup--hidden');
}

function closePopup(event) {
    event.preventDefault();
    
    imageWrapper.innerHTML = '';
    popup.classList.add('popup--hidden');
}

images.forEach(function(image) {
    image.addEventListener('click', onImageClick);
});

popupBack.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);

document.addEventListener("DOMContentLoaded", function() {
    objectFitImages();
});