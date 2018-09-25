var backdrop = document.querySelector(".backdrop");
var modalNotSelection = document.querySelector(".modal__action--negative");
var modal = document.querySelector(".modal");
var selectPlanButton = document.querySelectorAll(".plan button");
var hamburguerButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

for (var i = 0; i < selectPlanButton.length; i++){
    selectPlanButton[i].addEventListener("click", function () {
        //modal.style.display = "block";
        //backdrop.style.display = "block";  
        modal.classList.add ('open');   
        backdrop.classList.add ('open');    
    });
}

backdrop.addEventListener("click", function() {
    mobileNav.classList.remove('open');
    closeModal();
});

if(modalNotSelection){
    modalNotSelection.addEventListener("click", closeModal);
}

function closeModal() {
    //modal.style.display = "none";
    //backdrop.style.display = "none";
    if (modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

hamburguerButton.addEventListener("click", function openHamburguerButton (params) {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});



