const likeComponent = document.querySelector(".like");
const likeHeart = document.querySelector("#like-event");
const likeCounter = document.querySelector(".like-counter");
const description = document.querySelector(".description-enlace");
const mediaQuery = window.matchMedia("(min-width: 690px)");


likeComponent.addEventListener("click", likeAnimation);


function likeAnimation() {
    likeHeart.classList.toggle("like-animation");
    likeCounter.classList.toggle("like-color");
    likeComponent.classList.toggle("like-active");

    if (likeComponent.classList.contains("like-active")){
        likeCounter.innerText = "201";
    } else {
        likeCounter.innerText = "200";
    }

    

}

if (mediaQuery.matches) {
    description.innerText = "Practica tus habilidades de Grid CSS con este ejercicio de las capitales del mundo.";
} else {
    description.innerText = "leonidasesteban.com";
    }
