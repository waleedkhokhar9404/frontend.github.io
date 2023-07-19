
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttributes('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classlist.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classlist.add('active');
            });
        };
    });

/*sticky navbar*/

let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);


menuIcon.classList.toggle('bx-x');
navbar.classList.toggle('active');
 };

 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 200
 });

 
ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });

ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

// typed js
const typed = new typed('.Frontend Devolper',{
    strings: ['Frontend Devolper','Youtuber', 'blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});