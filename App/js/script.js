

function dropMenu() {
    const nav = document.getElementsByClassName("fa-solid");
    const dropdown = document.getElementById("nav");
    //   dropdown.classList.toggle("nav-mob");
      nav.addEventListener("click", function(){
        dropdown.classList.toggle('nav-pc');
        console.log("clicked");
      });
  }

//   nav.addEventListener("click", dropMenu);
  