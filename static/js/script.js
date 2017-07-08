(function() {

    var popup = document.querySelector('.popup');
    var popupBack = document.querySelector('.popup__back');
    var popupClose = document.querySelector('.popup__close');
    var imageWrapper = popup.querySelector('.popup__img-wrapper');
    var images = document.querySelectorAll('.gallery-item');
    var spinner = document.querySelector('.spinner');

    function onImageClick(event) {
        event.preventDefault();

        // Показываем спиннер
        spinner.classList.remove('spinner--hidden');
        
        // Создаём элемент изображения и добавляем необходимые атрибуты
        var image = document.createElement('img');
        image.classList.add('popup__img', 'popup__img--hidden');
        image.src = 'build/img/1x/' + this.dataset.img;
        image.srcset = 'build/img/2x/' + this.dataset.img + ' 2x';

        // После того, как изображение загрузилось
        image.addEventListener('load', function() {
            image.classList.remove('popup__img--hidden');
            spinner.classList.add('spinner--hidden');
        });
        
        popup.classList.remove('popup--hidden');
        imageWrapper.insertBefore(image, spinner);

        // Блокируем скролл документа
        document.body.classList.add('body-no-scroll');
    }

    function closePopup(event) {
        if (event) {
            event.preventDefault();
        }
        
        // Удаляем изображение и прячем попап
        imageWrapper.removeChild(imageWrapper.querySelector('.popup__img'));
        popup.classList.add('popup--hidden');

        // Убираем блок скролла
        document.body.classList.remove('body-no-scroll');
    }

    // Вешаем обработчики на все изображения
    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener('click', onImageClick);
    }

    popupBack.addEventListener('click', closePopup);
    popupClose.addEventListener('click', closePopup);

    // Полифилл для object-fit-images
    document.addEventListener("DOMContentLoaded", function() {
        objectFitImages();
    });

    // Закрытие изображения по нажатию на ESC
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (!popup.classList.contains('hidden')) {
                closePopup();
            }
        }
    });

}());