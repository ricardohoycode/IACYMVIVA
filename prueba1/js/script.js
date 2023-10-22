let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
    sideBar.classList.toggle('active');
}

document.querySelector('#close-side-bar').onclick = () =>{
    sideBar.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

window.onscroll = () =>{
    sideBar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelectorAll('.accordion-container .accordion').forEach(accordion =>{
    accordion.onclick = () =>{
        accordion.classList.toggle('active');
    }
});

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// VALIDACION DE FORMULARIO
var formulario = document.getElementById("formulario");

function validar(e) {
     var  inputNombre = document.getElementById("nombre"),
          inputEmail = document.getElementById("email"),
          inpuComents = document.getElementById("comentarios"),
          alertError = document.getElementById("alertError"),
          alertSuccess = document.getElementById("alertSuccess");
          

     if (inputNombre.value == 0 || inputEmail.value == 0 || inpuComents.value == 0) {
          e.preventDefault();
          alertError.classList.remove("hide");
          alertError.classList.add("show");

          setTimeout(function() {
               alertError.classList.remove("show");
               alertError.classList.add("hide"); 
          }, 2000);     
     }else{
          e.preventDefault();
          alertSuccess.classList.remove("hide");
          alertSuccess.classList.add("show");

          setTimeout(function() {
               alertSuccess.classList.remove("show");
               alertSuccess.classList.add("hide"); 
          }, 2000);               
          inputNombre.value = "";
          inputEmail.value = "";
          inpuComents.value = "";
     }
};


// Eventos del formulario
formulario.addEventListener("submit", validar);