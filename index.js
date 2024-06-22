document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    leftButton.addEventListener('click', () => {
        slider.scrollBy({
            left: -slider.offsetWidth / 3,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', () => {
        slider.scrollBy({
            left: slider.offsetWidth / 3,
            behavior: 'smooth'
        });
    });
});

document.querySelector('.arrow-down').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

function toggleDropdown(element) {
    const exhibitionsList = element.nextElementSibling;
    exhibitionsList.style.display = exhibitionsList.style.display === 'none' || exhibitionsList.style.display === '' ? 'block' : 'none';
}

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.container').classList.toggle('on');
});