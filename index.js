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

document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero');
    const arrow = document.querySelector('.arrow-down');
    
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight / 2) {
        arrow.classList.add('hidden');
    } else {
        arrow.classList.remove('hidden');
    }
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