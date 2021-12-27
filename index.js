// navbar

document.addEventListener('DOMContentLoaded', function () {
  // do something here ...

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav .container ul li");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active-home");
    li.classList.remove("active-contact");
    li.classList.remove("active-about");
    li.classList.remove("active-footer");
    li.classList.remove("active")
   
    if (li.classList.contains(current)) {
   
      li.classList.add("active-"+ current)
      li.classList.add("active")
    

    }

  
  });
});



// end of navbar
}, false);

function myFunction(press){
 
 
  var x = document.getElementById("container");
  
    if (x.className === "container") {
      x.className += " responsive";
    } else {
      x.className = "container";
    }
  
    press.classList.toggle("fa-times-circle")
  
  }
  