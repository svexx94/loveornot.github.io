document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const message = document.getElementById('message');
    const heartsContainer = document.getElementById('heartsContainer');
    
    // Создаем плавающие сердечки
    function createHearts() {
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '❤️';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
                heartsContainer.appendChild(heart);
                
                // Удаляем сердечко после анимации
                setTimeout(() => {
                    heart.remove();
                }, 8000);
            }, i * 500);
        }
    }
    
    // Запускаем создание сердечек каждые 8 секунд
    createHearts();
    setInterval(createHearts, 8000);
    
    // Обработчик для кнопки "Нет"
    noBtn.addEventListener('mouseover', function() {
        moveButton();
    });
    
    noBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveButton();
    });
    
    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        moveButton();
    });
    
    // Функция перемещения кнопки
    function moveButton() {
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        
        const maxX = containerRect.width - noBtn.offsetWidth - 20;
        const maxY = containerRect.height - noBtn.offsetHeight - 20;
        
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // Меняем текст кнопки
        const messages = [
            "Точно нет?",
            "Подумай ещё!",
            "Я расстроюсь!",
            "Пожалуйста!",
            "Ты уверена?",
            "Не нажимай!",
            "Я тебя разлюблю!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        noBtn.textContent = randomMessage;
    }
    
    // Обработчик для кнопки "ДА!"
    yesBtn.addEventListener('click', function() {
        message.style.display = 'block';
        noBtn.style.display = 'none';
        
        // Создаем дополнительные сердечки при нажатии ДА
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.innerHTML = '💖';
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                heartsContainer.appendChild(heart);
                
                setTimeout(() => {
                    heart.remove();
                }, 6000);
            }, i * 200);
        }
    });
});