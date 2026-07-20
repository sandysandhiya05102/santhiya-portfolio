// ===========================
// Hamburger Menu
// ===========================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu after clicking a link (Mobile)

document.querySelectorAll("#navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// ===========================
// Active Navbar Link
// ===========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});



// ===========================
// Typing Effect
// ===========================

const words = [
    "Software Tester",
    "Manual Tester",
    "QA Engineer",
    "Automation Testing Learner"
];

let index = 0;

const typing = document.querySelector(".typing");

setInterval(() => {

    typing.textContent = words[index];

    index++;

    if(index === words.length){
        index = 0;
    }

},2000);

// ===========================
// Scroll To Top Button
// ===========================

const topBtn = document.getElementById("topBtn");

if(topBtn){

window.addEventListener("scroll",()=>{

    if(window.scrollY > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});

}

// ===========================
// Simple Fade Animation
// ===========================

const cards=document.querySelectorAll(
".education-card,.skill-card,.project-card,.certificate-card"
);

function reveal(){

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);



// EmailJS Public Key Initialize

(function () {

emailjs.init("HtBF2IMUDA0EfLOSq");

})();


// Form and Status

const form = document.getElementById("contact-form");
const status = document.getElementById("status");


// Send Message

form.addEventListener("submit", function (e) {

e.preventDefault();


emailjs.sendForm(

"service_3amznfs",

"template_mgg91ld",

this

)

.then(function () {


status.innerHTML = "Message Sent Successfully!";
status.style.color = "green";


// Clear Form

form.reset();


// Hide message after 3 seconds

setTimeout(() => {

status.innerHTML = "";

},3000);


})

.catch(function (error) {

status.innerHTML = "Message Failed. Try Again!";
status.style.color = "red";

console.log(error);

});


});

emailjs.sendForm(
    "service_3amznfs",
    "template_mgg91ld",
    this
)

.then(() => {

    status.textContent = "Message Sent Successfully!";
    status.style.color = "lightgreen";

    form.reset();

    setTimeout(() => {

        status.textContent = "";

    }, 3000);

})
