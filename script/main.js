// nawigacja w headerze
const list = document.querySelectorAll('.list');

const activeLink = (clickedItem) => {
    list.forEach((item) => item.classList.remove('active'));
    clickedItem.classList.add('active');
};

list.forEach((item) => item.addEventListener('click', activeLink.bind(null, item)));

