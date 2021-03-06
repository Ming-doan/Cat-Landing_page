function lockScroll(status) {
    const body = document.querySelector("body")
    if (status) {
        body.style.overflowY = "hidden"
    } else {
        body.style.overflowY = "auto"
    }
}

// Scroll navigation bar
const navbar = document.querySelector(".nav")
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const moverToHeader = document.querySelector(".move-to-header")
moverToHeader.addEventListener('click', function() {
    window.location = '#header'
})

window.onscroll = function() {
    let currentPosition = window.pageYOffset;
    // console.log(currentPosition)
    if (currentPosition === 0) {
        navbar.classList.add("transparent")
        moverToHeader.classList.add("hidden")
    }
    if (currentPosition > 0) {
        navbar.classList.remove("transparent")
    }
    if (currentPosition >= 616) {
        scrollDetect("home")
        moverToHeader.classList.remove("hidden")
    }
    if (currentPosition >= 1316) {
        scrollDetect("species")
    }
    if (currentPosition >= 3516) {
        scrollDetect("gallery")
    }
    if (currentPosition >= 4621) {
        scrollDetect("contact")
    }
    let scrolled = (currentPosition / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
}

function scrollDetect(current) {
    document.querySelector(".nav-container-item.active").classList.remove("active")
    if (current === 'home') {
        document.getElementById("home-nav").classList.add('active')
    }
    if (current === 'species') {
        document.getElementById("species-nav").classList.add('active')
    }
    if (current === 'gallery') {
        document.getElementById("gallery-nav").classList.add('active')
    }
    if (current === 'contact') {
        document.getElementById("contact-nav").classList.add('active')
    }
}

// Menu Burger
const menuBurger = document.querySelector(".menu-burger")
const menuContainer = document.querySelector(".menu-burger-container")
const menuBurgerItem = document.querySelectorAll(".burger-container-item:not(:last-child)")
for(let i = 0; i < menuBurgerItem.length; i++) {
    menuBurgerItem[i].addEventListener('click', toggleMenu)
}
menuBurger.addEventListener('click', toggleMenu)

function toggleMenu() {
    menuBurger.classList.toggle('open')
    menuBurger.querySelector(".menu-burger-bar").classList.toggle("black")
    if(menuBurger.classList.contains("open")) {
        menuContainer.style.transform = "translateX(0)"
        lockScroll(true)
    } else if (!menuBurger.classList.contains("open")) {
        menuContainer.style.transform = "translateX(100%)"
        lockScroll(false)
    }
}

// Button Links
const wikiBtn = document.querySelector("#wiki");
wikiBtn.addEventListener("click", function() {
    window.location = "https://vi.wikipedia.org/wiki/M%C3%A8o"
})

const exploreBtn = document.querySelector("#explore");
exploreBtn.addEventListener('click', function() {
    window.location = "#home"
})

// Cat love button
const catLoveBtn = document.getElementById("cat-love-btn");
catLoveBtn.addEventListener("click", function() {
    window.location = "https://www.thesprucepets.com/top-things-cats-like-554309"
})

// Species button
const speciesBtn = document.getElementById("species-btn");
speciesBtn.addEventListener("click", function() {
    window.location = "https://thichthucung.com/cac-giong-meo/"
})

// Gallery button
const galleryBtn = document.getElementById("gallery-btn");
galleryBtn.addEventListener("click", function() {
    window.location = "https://pixabay.com/images/search/cat/"
})

// Gallery modal
const image = document.querySelectorAll(".gallery-item");
const modalContainer = document.querySelector(".modal-container");
for(let i = 0; i < image.length; i++) {
    image[i].onclick = function() {
        let href = this.querySelector("img").src
        let modalUI = `
        <div class="gallery-modal">
            <div class="modal-image">
                <img src="${href}" alt="Images">
            </div>
            <div class="modal-close">
                <i class="fas fa-times"></i>
            </div>
            <div class="modal-overlay"></div>
        </div>
        `
        modalContainer.innerHTML = modalUI;
        lockScroll(true)
        const galleryModal = document.querySelector(".gallery-modal");
        const modalOverlay = document.querySelector(".modal-overlay");
        const modalClose = document.querySelector(".modal-close");
        modalOverlay.addEventListener("click", function() {
            galleryModal.remove()
            lockScroll(false)
        })
        modalClose.addEventListener("click", function() {
            galleryModal.remove()
            lockScroll(false)
        })
    }
}

const playBtn = document.querySelector(".video-btn");
playBtn.addEventListener('click', function() {
    let modalUI = `
    <div class="gallery-modal">
        <div class="modal-image">
            <iframe src="https://www.youtube.com/embed/eX2qFMC8cFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="modal-close">
            <i class="fas fa-times"></i>
        </div>
        <div class="modal-overlay"></div>
    </div>
    `
    modalContainer.innerHTML = modalUI;
    lockScroll(true)
    const galleryModal = document.querySelector(".gallery-modal");
    const modalOverlay = document.querySelector(".modal-overlay");
    const modalClose = document.querySelector(".modal-close");
    modalOverlay.addEventListener("click", function() {
        galleryModal.remove()
        lockScroll(false)
    })
    modalClose.addEventListener("click", function() {
        galleryModal.remove()
        lockScroll(false)
    })
})

// Quotes modifying
let quotes = [
    "Meow Meow...",
    "What greater gift than the love of a cat.",
    "There are two means of refuge from the miseries of life: music and cats.",
    "As every cat owner knows, nobody owns a cat.",
    "The cat is above all things, a dramatist."
]

const catQuotes = document.querySelector(".sub-title")
let currentQuotes = 0
catQuotes.innerHTML = quotes[0]
setInterval(function() {
    if (currentQuotes >= quotes.length - 1) {
        currentQuotes = -1
    }
    currentQuotes++
    catQuotes.innerHTML = quotes[currentQuotes]
}, 7000)
