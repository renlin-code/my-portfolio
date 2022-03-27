//NAVIGATOR MENU
const menuButton = document.querySelector(".header-nav--menu-button");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    body.classList.toggle("body_fixed");
});
function menuItemClick(){
    navMenu.classList.remove("nav-menu_visible");
    body.classList.remove("body_fixed");
    document.getElementById("btn-menu-checkbox").checked = false;
};

//CERTIFICATES
class Certificate {
    constructor(
        {
            name,
            description,
            previewLocation,
            viewLocation,
        }
    ){
        this.name = name;
        this.description = description;
        this.previewLocation = previewLocation;
        this.viewLocation = viewLocation;
    }
    popupView(){
        document.getElementById("popup-window").style.display = "flex";
        document.getElementById("popup-img").src = this.viewLocation;
        document.getElementById("certificate-description").innerHTML = this.description;
    }
}

const id0 = new Certificate ({
    name: "Curso de Frontend",
    description: "Curso de Frontend",
    viewLocation: "./assets/images/certificate-frontend.png"
})
const id1 = new Certificate ({
    name: "Curso Práctico de Frontend",
    description: "Curso Práctico de Frontend",
    viewLocation: "./assets/images/certificate-frontend-practic.png"
})
const id2 = new Certificate ({
    name: "Curso de HTML y CSS",
    description: "Curso de HTML y CSS",
    viewLocation: "./assets/images/certificate-html-and-css.png"
})
const id3 = new Certificate ({
    name: "Curso Práctico de HTML y CSS",
    description: "Curso Práctico de HTML y CSS",
    viewLocation: "./assets/images/certificate-html-and-css-practic.png"
})
const id4 = new Certificate ({
    name: "Curso de Responsive Design",
    description: "Curso de Responsive Design",
    viewLocation: "./assets/images/certificate-responsive-mobile-first.png"
})
const id5 = new Certificate ({
    name: "Curso de la Terminal",
    description: "Curso de la Terminal",
    viewLocation: "./assets/images/certificate-terminal.png"
})
const id6 = new Certificate ({
    name: "Curso de Git y GitHub",
    description: "Curso de Git y GitHub",
    viewLocation: "./assets/images/certificate-git-github.png"
})
const id7 = new Certificate ({
    name: "Curso Básico de JavaScript",
    description: "Curso Básico de JavaScript",
    viewLocation: "./assets/images/certificate-basic-js.png"
})
const id8 = new Certificate ({
    name: "Curso Básico Práctico de JavaScript",
    description: "Curso Básico Prácticode JavaScript",
    viewLocation: "./assets/images/certificate-basic-js-practic.png"
})
const id9 = new Certificate ({
    name: "Curso de Closures y Scope",
    description: "Curso de Closures y Scope",
    viewLocation: "./assets/images/certificate-scope.png"
})
const id10 = new Certificate ({
    name: "Curso de Ingeniería de Softwares",
    description: "Curso de Ingeniería de Softwares",
    viewLocation: "./assets/images/certificate-software-engineering.png" 
})
const id11 = new Certificate ({
    name: "Curso Básico de JS Orientado a Objetos",
    description: "Curso Básico de JS Orientado a Objetos",
    viewLocation: "./assets/images/certificate-basic-js-OOP.png"
})

function popupClose() {
    document.getElementById("popup-window").style.display = "none";
}


//SLIDER CONTROLS
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
