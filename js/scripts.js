    //NAVIGATOR MENU
const menuButton = document.querySelector(".header-nav--menu-button");
const navMenu = document.querySelector(".nav-menu");
const body = document.querySelector("body");
menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    body.classList.toggle("body_fixed");
});
const menuItemClick = () => {
    navMenu.classList.remove("nav-menu_visible");
    body.classList.remove("body_fixed");
    document.getElementById("btn-menu-checkbox").checked = false
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
    description: "Теоритический курс по Frontend-разработке",
    viewLocation: "./assets/images/certificate-frontend.png"
})
const id1 = new Certificate ({
    name: "Curso Práctico de Frontend",
    description: "Практический курс по Frontend-разработке",
    viewLocation: "./assets/images/certificate-frontend-practic.png"
})
const id2 = new Certificate ({
    name: "Curso de HTML y CSS",
    description: "Полный теоритический курс по HTML и CSS",
    viewLocation: "./assets/images/certificate-html-and-css.png"
})
const id3 = new Certificate ({
    name: "Curso Práctico de HTML y CSS",
    description: "Полный практический курс по HTML и CSS",
    viewLocation: "./assets/images/certificate-html-and-css-practic.png"
})
const id4 = new Certificate ({
    name: "Curso de Responsive Design",
    description: "Курс по адаптивной верстке Mobile First",
    viewLocation: "./assets/images/certificate-responsive-mobile-first.png"
})
const id5 = new Certificate ({
    name: "Curso de la Terminal",
    description: "Курс по терминалу",
    viewLocation: "./assets/images/certificate-terminal.png"
})
const id6 = new Certificate ({
    name: "Curso de Git y GitHub",
    description: "Курс по Git и GitHub",
    viewLocation: "./assets/images/certificate-git-github.png"
})
const id7 = new Certificate ({
    name: "Curso Básico de JavaScript",
    description: "Базовый теоритический курс по JavaScript",
    viewLocation: "./assets/images/certificate-basic-js.png"
})
const id8 = new Certificate ({
    name: "Curso Básico Práctico de JavaScript",
    description: "Базовый практический курс по JavaScript",
    viewLocation: "./assets/images/certificate-basic-js-practic.png"
})
const id9 = new Certificate ({
    name: "Curso de Closures y Scope",
    description: " Курс по Closures y Scope",
    viewLocation: "./assets/images/certificate-scope.png"
})
const id10 = new Certificate ({
    name: "Curso de Ingeniería de Softwares",
    description: "Курс по Software Engineering",
    viewLocation: "./assets/images/certificate-software-engineering.png" 
})
const id11 = new Certificate ({
    name: "Curso Básico de JS Orientado a Objetos",
    description: "Базовый теоритический курс по объектно-ориентированному программированию с JavaScript",
    viewLocation: "./assets/images/certificate-basic-js-OOP.png"
})
const id12 = new Certificate ({
    name: "Curso Intermedio de JS Orientado a Objetos",
    description: "Средний теоритический курс по объектно-ориентированному программированию с JavaScript",
    viewLocation: "./assets/images/certificate-middle-js-OOP.png"
})
const id13 = new Certificate ({
    name: "Curso de Manipulación de Arrays",
    description: "Курс по управлению Arrays",
    viewLocation: "./assets/images/certificate-arrays.png"
})
const id14 = new Certificate ({
    name: "Curso de Asincronismo en JavaScript",
    description: "Курс по асинхронности в JavaScript",
    viewLocation: "./assets/images/certificate-async-js.png"
})
const id15 = new Certificate ({
    name: "Curso de Diseño Web con Flexbox y CSS Grid",
    description: "Курс по веб-дизайн c Flexbox и CSS Grid",
    viewLocation: "./assets/images/certificate-flexbox-css-grid.png"
})
const id16 = new Certificate ({
    name: "Curso de Transformaciones y Transiciones",
    description: "Курс по transform и transition",
    viewLocation: "./assets/images/certificate-transform-transition.png"
})
const id17 = new Certificate ({
    name: "Curso de Ecmascript",
    description: "Курс по Ecmascript",
    viewLocation: "./assets/images/certificate-ecmascript.png"
})



const popupClose = () => {
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
