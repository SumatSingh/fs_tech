
// handle website data loading
function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}

function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}

// Typewriter Effect

const texts = [
    "WEB DEVELOPER",
    "MERN DEVELOPER",
    "PHP DEVELOPER"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let charcterIndex = 0;

function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}

window.onload = typeWriter






// handle Header a tag
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Default action ko prevent karta hai (jaise instant jump)
        
        // Targeted section ko smoothly scroll karta hai
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // Smooth scroll behavior
            block: 'start'      // Scroll karne ka point (start, center, end)
        });
    });
});



// handle Header background and sticky
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar'); // Update this with your actual navbar class or id

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Change 50 to the scroll position you want to trigger the effect
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});







// handle theme dark and light


const toggle_btn = document.querySelector('#checkbox')
console.log(toggle_btn);

toggle_btn.addEventListener('change', () => {
    if (toggle_btn.checked) {
        console.log("toggle_btn Checked");
        document.body.classList.add('light-mode')
    } else {
        console.log("toggle_btn Un_Checked");
        document.body.classList.remove('light-mode')
    }
})




























// handle theme dark and light 
// document.addEventListener('DOMContentLoaded', () => {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const themeLink = document.getElementById('theme-link');

//     // Load the saved theme from localStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//         console.log(`Applying saved theme: ${savedTheme}`); // Debugging
//         themeLink.href = savedTheme;
//         themeToggleButton.textContent = savedTheme === 'dark-theme.css' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
//     } else {
//         console.log('No saved theme found, applying default.');
//     }

//     // Toggle theme on button click
//     themeToggleButton.addEventListener('click', () => {
//         let currentTheme = themeLink.getAttribute('href');
//         let newTheme = currentTheme === 'light-theme.css' ? 'dark-theme.css' : 'light-theme.css';

//         console.log(`Switching to new theme: ${newTheme}`); // Debugging
//         themeLink.setAttribute('href', newTheme);
//         themeToggleButton.textContent = newTheme === 'dark-theme.css' ? 'Switch to Light Theme' : 'Switch to Dark Theme';
        
//         // Save the selected theme to localStorage
//         localStorage.setItem('theme', newTheme);
//     });
// });


