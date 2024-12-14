document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-rounded'); // Все изображения
    const modal = document.createElement('div'); // Создаём модальное окно
    modal.classList.add('image-modal');
    modal.style.display = 'none'; // Скрываем по умолчанию

    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="" alt="Full-size image" class="modal-image">
        </div>
    `;

    document.body.appendChild(modal);

    const modalImage = modal.querySelector('.modal-image');
    const closeButton = modal.querySelector('.close-button');

    // Открытие модального окна
    images.forEach(image => {
        image.addEventListener('click', () => {
            modalImage.src = image.src; // Устанавливаем источник изображения
            modal.style.display = 'flex'; // Показываем модальное окно
        });
    });

    // Закрытие через кнопку
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Закрытие через клик вне области
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');

    // Открытие меню при нажатии на бургер
    burger.addEventListener('click', (e) => {
        e.stopPropagation(); // Предотвращаем закрытие меню при клике на бургер
        menu.classList.add('active');
    });

    // Закрытие меню при клике на любую часть экрана
    document.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    // Оставляем меню открытым, если клик внутри меню
    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});