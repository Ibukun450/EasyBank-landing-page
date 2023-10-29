const mobileHeader = document.getElementById('mobile-header');
const desktopHeader = document.getElementById('desktop-header');

const nb = document.getElementById('navbar');

const img = document.getElementById('image');

function toggleHeaders() {
if (window.innerWidth <= 1000) {
    mobileHeader.style.display = 'flex';
    nb.style.display = 'none';
    img.style.display = 'flex'; 
    desktopHeader.style.display = 'none';
} else {
    mobileHeader.style.display = 'none';
    desktopHeader.style.display = 'flex';
}
}
toggleHeaders();

window.addEventListener('resize', toggleHeaders);
