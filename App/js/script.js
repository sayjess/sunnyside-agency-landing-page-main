//create a function which toggles:
//section-off
//nav-mobile
//when hamburger is clicked

function dropMenu() {
    const navmobile = document.querySelector("nav");
    const hamburger = document.querySelector(".hamburger");
    const section = document.querySelector(".head-design");
    hamburger.addEventListener("click", function(){
    navmobile.classList.toggle("nav-mobile");
    // navmobile.style.transition = "all 2s ease";
    section.classList.toggle("section-off");
    });
}

dropMenu();

  