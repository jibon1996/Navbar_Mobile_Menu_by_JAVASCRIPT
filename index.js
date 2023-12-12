const navUl = document.querySelector("header ul");
const links = document.querySelectorAll("header ul li a");
const openMenu = document.querySelector("header .open_btn");
const closeMenu = document.querySelector("header .close_btn");
const navContainer = document.querySelector(".navContainer")

// add active and change active ul li a
links.forEach(link => {
    link.addEventListener("click", () => {
      document.querySelector(".active")?.classList.remove("active");
      link.classList.add("active");
    })
})
// open mobile menu 
openMenu.addEventListener("click", () => {
    navUl.style.display = "flex";
    openMenu.style.display = "none";
    closeMenu.style.display = "inline-block";
})
// close mobile menu 
closeMenu.addEventListener("click", () => {
  navUl.style.display = "none";
  openMenu.style.display = "inline-block";
  closeMenu.style.display = "none";
})
// More then 767px ul will show 
window.addEventListener("resize", () => {
  if(window.innerWidth > "767"){
    openMenu.style.display ="none";
    closeMenu.style.display ="none";
    navUl.style.display = "flex";
    
     // click single menu item removeEventListener
     links.forEach(link => {
      link.removeEventListener("click",menuHide);
    })
    
  }
 
})
// Less then 767px ul will not show like big screen
window.addEventListener("resize", () => {
  if(window.innerWidth <= "767"){
    openMenu.style.display ="flex";
    navUl.style.display = "none";

   //when window resize less <= 767px (click single menu item to hide menu )

  function menuHide(){
    navUl.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
  }
  
  links.forEach(link => {
    link.addEventListener("click",menuHide);
  })
  }
  
})

  //  click single menu item to hide menu 

  function menuHide(){
    navUl.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
  }
  
  links.forEach(link => {
    link.addEventListener("click",menuHide);
  })

  // click anywhere to close mobile menu 

document.addEventListener("click", (e)=> {
  if(!navContainer.contains(e.target) && !openMenu.contains(e.target)){
    navUl.style.display = "none";
    closeMenu.style.display = "none";
    openMenu.style.display = "inline-block";
  }
})

// nav ul show big screen
window.addEventListener('click', () => { 
  if(window.innerWidth > "767"){    
          // nav ul 
          navUl.style.display = "flex";
          openMenu.style.display = "none";
              
  }
});


  