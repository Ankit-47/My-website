let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*='${id}']`).classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
const scriptURL = 'https://script.google.com/macros/s/AKfycby0b4tYUi0FdnA2_Z1pJ-V8Dwe5wLNa0J52bDm3wHPlAlhOFot1bdOxa_EfmcZBF0xf/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {msg.innerHTML="The Message has been sent.."})
        setTimeout(function(){
            msg.innerHTML= ""
        },500)
        form.reset()
        .catch(error => console.error('Error!', error.message))
})
