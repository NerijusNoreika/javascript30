const links = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

links.forEach(link => {

    let classes = [
        'trigger-enter', 
        'trigger-enter-active'
    ];

    link.addEventListener('mouseenter', () => {
        link.classList.add('trigger-enter');
        setTimeout(() => link.classList.contains('trigger-enter') && link.classList.add('trigger-enter-active'), 150);
        let dropdown = link.querySelector('.dropdown');
        background.classList.add('open');

        let dropdownCoords = dropdown.getBoundingClientRect();
        let navCoords = nav.getBoundingClientRect();
        // we remove navCoords, cause navigation might be not at very top
        // and the background is absolute RELATIVE to nav and NOT viewport
        const coords = {
            height: dropdownCoords.height,
            width: dropdownCoords.width,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left,
        };

        background.style.width =  `${coords.width}px`;
        background.style.height = `${coords.height}px`;

        background.style.left = `${coords.left}px`;
        background.style.top = `${coords.top}px`;


    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove(...classes);
        background.classList.remove('open');
    })
});