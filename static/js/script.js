var popup = document.querySelector('.popup');
var popupBack = document.querySelector('.popup__back');
var popupClose = document.querySelector('.popup__close');
var imageWrapper = popup.querySelector('.popup__img-wrapper');
var images = document.querySelectorAll('.gallery-item');
var spinner = document.querySelector('.spinner');

function onImageClick(event) {
    event.preventDefault();

    spinner.classList.remove('spinner--hidden');
    
    var image = document.createElement('img');
    image.classList.add('popup__img', 'popup__img--hidden');
    image.src = 'static/img/1x/' + this.dataset.img;
    image.srcset = 'static/img/2x/' + this.dataset.img + ' 2x';

    image.addEventListener('load', function() {
        image.classList.remove('popup__img--hidden');
        spinner.classList.add('spinner--hidden');
    });
    
    popup.classList.remove('popup--hidden');

    console.log(imageWrapper);
    imageWrapper.insertBefore(image, spinner);

    document.body.classList.add('body-no-scroll');
}

function closePopup(event) {
    if (event) {
        event.preventDefault();
    }
    
    imageWrapper.removeChild(imageWrapper.querySelector('.popup__img'));
    popup.classList.add('popup--hidden');
    document.body.classList.remove('body-no-scroll');
}

images.forEach(function(image) {
    image.addEventListener('click', onImageClick);
});

popupBack.addEventListener('click', closePopup);
popupClose.addEventListener('click', closePopup);

document.addEventListener("DOMContentLoaded", function() {
    objectFitImages();
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (!popup.classList.contains('hidden')) {
            closePopup();
        }
    }
})