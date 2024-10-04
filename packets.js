// Modal Bronze
const modalBronze = document.getElementById('promoModalBronze');
const promoTextBronze = document.getElementById('promoTextBronze');
const closeBronze = document.getElementById('closeBronze');

// Открыть окно Bronze
promoTextBronze.addEventListener('click', function() {
    modalBronze.style.display = 'block';
});

// Закрыть окно Bronze
closeBronze.addEventListener('click', function() {
    modalBronze.style.display = 'none';
});

// Закрытие по клику вне окна Bronze
window.addEventListener('click', function(event) {
    if (event.target == modalBronze) {
        modalBronze.style.display = 'none';
    }
});

// Modal Platinum
const modalPlatinum = document.getElementById('promoModalPlatinum');
const promoTextPlatinum = document.getElementById('promoTextPlatinum');
const closePlatinum = document.getElementById('closePlatinum');

// Открыть окно Platinum
promoTextPlatinum.addEventListener('click', function() {
    modalPlatinum.style.display = 'block';
});

// Закрыть окно Platinum
closePlatinum.addEventListener('click', function() {
    modalPlatinum.style.display = 'none';
});

// Закрытие по клику вне окна Platinum
window.addEventListener('click', function(event) {
    if (event.target == modalPlatinum) {
        modalPlatinum.style.display = 'none';
    }
});