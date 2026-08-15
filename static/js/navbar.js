const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
if(menuToggle&&navLinks){
    menuToggle.addEventListener("click",()=>{
        navLinks.classList.toggle("active");
    });
}
const dropdownParents=document.querySelectorAll(".dropdown-parent");
dropdownParents.forEach(parent=>{
    const toggle=parent.querySelector(":scope > a");
    const dropdown=parent.querySelector(":scope > .dropdown");
    if(!toggle||!dropdown)return;
    toggle.addEventListener("click",event=>{
        event.preventDefault();
        event.stopPropagation();
        if(window.innerWidth<=992){
            dropdownParents.forEach(other=>{
                if(other!==parent)other.classList.remove("active");
            });
            parent.classList.toggle("active");
        }
    });
});
document.addEventListener("click",event=>{
    if(window.innerWidth<=992){
        dropdownParents.forEach(parent=>{
            if(!parent.contains(event.target))parent.classList.remove("active");
        });
    }
});
window.addEventListener("resize",()=>{
    if(window.innerWidth>992){
        dropdownParents.forEach(parent=>parent.classList.remove("active"));
    }
});
const links=document.querySelectorAll(".nav-links a");
links.forEach(link=>{
    link.addEventListener("click",()=>{
        if(!link.closest(".dropdown-parent")){
            links.forEach(l=>l.classList.remove("active"));
            link.classList.add("active");
            if(window.innerWidth<=992&&navLinks)navLinks.classList.remove("active");
        }
    });
});
window.addEventListener("scroll",()=>{
    const navbar=document.querySelector(".navbar");
    if(!navbar)return;
    if(window.scrollY>50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});