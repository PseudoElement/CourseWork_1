const arrOfLinks = document.querySelectorAll(`header nav a`);
const features = document.getElementById(`Features`);
const about = document.getElementById(`About`);
const pricing = document.getElementById(`Pricing`);
const reviews = document.getElementById(`Reviews`);
const contacts = document.getElementById(`Contacts`);
function scr(event) {
    // header.style.display = 'none';
    if (event.target.className === '0') {
        setTimeout(function () {
            features.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }, 2);
    }
    if (event.target.className === '1') {
        setTimeout(function () {
            about.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }, 2)
    }
    if (event.target.className === '2') {
        setTimeout(function () {
            pricing.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }, 2)
    }
    if (event.target.className === '3') {
        setTimeout(function () {
            reviews.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }, 2)
    }
    if (event.target.className === '4') {
        setTimeout(function () {
            contacts.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            })
        }, 2)
    }
}
arrOfLinks.forEach((link) => {
    link.addEventListener('click', scr);
});
