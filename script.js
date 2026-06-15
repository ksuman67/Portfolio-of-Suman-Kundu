// Dark Mode Toggle

const themeBtn = document.querySelector(".theme-btn");

themeBtn?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

});

// Scroll Animation

const cards = document.querySelectorAll(
'.project-card, .article-card, .skill-box, .fact-card'
);

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.classList.add('show');
        }

    });

});

// Navbar Active Link

const links = document.querySelectorAll(".nav-left a");

links.forEach(link => {

    link.addEventListener("click", () => {

        links.forEach(item => item.classList.remove("active"));

        link.classList.add("active");

    });

});

// Smooth Page Loading

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.classList.add("top-btn");

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.classList.add("show-top");

    } else {

        topBtn.classList.remove("show-top");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
const bulb = document.querySelector(".bulb");

bulb.addEventListener("click", () => {
  bulb.classList.toggle("off");
});