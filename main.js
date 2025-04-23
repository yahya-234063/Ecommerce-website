window.addEventListener("scroll",()=>{
  if(window.scrollY > 100){
    hed.classList.add("scroll-down");
    hed.classList.add("div.father-for-header-section-for-image");
  }else{
    hed.classList.remove("scroll-down");
  }
})