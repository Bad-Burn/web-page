/*toogle navbar creation */

var menuBar=document.querySelector('#menu-icon');
var navbar=document.querySelector('.navbar');

menuBar.onclick=()=>{
    menuBar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/* scroll scetion */

let section=document.querySelectorAll("section");
let navLinks=document.querySelectorAll("header nav a");

window.onscroll=()=>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top>=offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                sample=document.querySelector('header nav a[href*=' + id +']');
        
                sample.classList.add('active');
            })
        }
        
    })
    /*toogle navbar creation */

    menuBar.classList.remove('bx-x');
    navbar.classList.remove('active');

}

/* scrrol */

// Toggle Resume Image
document.addEventListener('DOMContentLoaded', function() {
    var showResumeBtn = document.getElementById('show-resume-btn');
    var resumeImageContainer = document.getElementById('resume-image-container');
    if (showResumeBtn && resumeImageContainer) {
        showResumeBtn.addEventListener('click', function() {
            if (resumeImageContainer.style.display === 'none') {
                resumeImageContainer.style.display = 'block';
            } else {
                resumeImageContainer.style.display = 'none';
            }
        });
    }
});

ScrollReveal({ 
    /*reset: true,*/
    distance:'80px',
    duration:2000,
    dely:200 
});

ScrollReveal().reveal('.home-content,.heading', { origin:'top' });
ScrollReveal().reveal('.home-content h1,.about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p,.about-container', { origin:'right' });
ScrollReveal().reveal('.home-img,.serives-container,.portfolio-box,.contact form', { origin:'bottom' });

const toggleThemeBtn = document.getElementById('toggle-theme');
let isLightMode = false;

toggleThemeBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;
    if (isLightMode) {
        document.body.classList.add('light-mode');
        toggleThemeBtn.textContent = 'Lights Off';
    } else {
        document.body.classList.remove('light-mode');
        toggleThemeBtn.textContent = 'Lights On';
    }
});