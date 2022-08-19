// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color_option");

if (mainColor !== null) {
// console.log("Local Storage Is Not Empty You Can Set On Root Now");
// console.log(localStorage.getItem("color_option"));

document.documentElement.style.setProperty("--main-color", mainColor);

 // Remove Active Class From All Colors Items
    document.querySelectorAll(".colors-list li").forEach(element => {

element.classList.remove("active");

    // Add Active Class On Element With data-color === Local Storage Item
    if (element.dataset.color === mainColor) {

        // Add Active Class
        element.classList.add("active");

    }

    });

};

// Random Background Option
let backgroundOption = true;

// Variable To Control The Background Interval
let BackgroundInterval;

// Start Settings Box

// Check If There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {

// console.log("Not Empty");
// console.log(backgroundLocalItem);
// console.log(typeof backgroundLocalItem);

if (backgroundLocalItem === "true") {

    backgroundOption = true;

} else {

backgroundOption = false;

}

// Remove Active Class From All Spans
document.querySelectorAll(".random-backgrounds span").forEach(element => {

element.classList.remove("active");

}); 

if (backgroundLocalItem === "true") {
   
   document.querySelector(".random-backgrounds .yes").classList.add("active");

} else {

document.querySelector(".random-backgrounds .no").classList.add("active");

}

}

// Click On Toggle Settings Gear
document.querySelector(".toggle-settings .fa-cog").onclick = function () {

// Toggle Class fa-spin For Rotation On Self
this.classList.toggle("fa-spin");

// Toggle Class open On Main Settings Box
document.querySelector(".settings-box").classList.toggle("open");
};

// Switch Colors
const colorli = document.querySelectorAll(".colors-list li");

// Loop On All List Items
colorli.forEach(li => {

// Click On Every List Items
li.addEventListener("click", (e) => {

    // console.log(e.target.dataset.color);

    // Set Color On Root
    document.documentElement.style.setProperty("--main-color", e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    handleActive(e);

});

});

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On All Spans
randomBackEl.forEach(span => {

// Click On Every Span
span.addEventListener("click", (e) => {

    handleActive(e);

    if (e.target.dataset.background === "yes") {

        backgroundOption = true;

        randomizeImgs();

        localStorage.setItem("background_option", true);

    } else {

backgroundOption = false;

clearInterval(BackgroundInterval);

localStorage.setItem("background_option", false);

    }

});

});

// End Settings Box

// Start Landing Page

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {

if (backgroundOption === true) {

  BackgroundInterval = setInterval(() => {

// Get Random Number

let randomNumber = Math.floor(Math.random() * imgsArray.length);

// Change Background Image Url
landingPage.style.backgroundImage = `url('imgs/${imgsArray[randomNumber]}')`;

}, 10000)

}

}

randomizeImgs();

// End Landing Page

// Start Our Skills

// Select Skill Selector
let ourSills = document.querySelector(".skills");

window.onscroll = function () {

    // Skills Offset Top
    let skillsOffsetTop = ourSills.offsetTop;

    // Skills Outer Height
    let skillsOuterHeight = ourSills.offsetHeight;

    // Window Height
    let windowHeight = this.innerHeight;

    // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    }

};

// End Our Skills

// Start Gallery

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

img.addEventListener('click', (e) => {

// Create Overlay Element
let overlay = document.createElement("div");

// Add Class To Overlay
overlay.className = "popup-overlay";

// Append Overlay To The Body
document.body.appendChild(overlay);

// Create The Popup Box
let popupBox = document.createElement("div");

// Add Class To The Popup Box
popupBox.className = "popup-box";

if (img.alt !== null) {

// Creare Heading
let imgHeading = document.createElement("h3");

// Create Text For Heading
let imgText = document.createTextNode(img.alt);

// Append The Text To The Heading
imgHeading.appendChild(imgText);

// Append The Heading To The Popup Box
popupBox.appendChild(imgHeading);

}

// Create The Image
let popupImage = document.createElement("img");

// Set Image Source
popupImage.src = img.src;

// Add Image To Popup Box
popupBox.appendChild(popupImage);

// Append The Popup Box To Body
document.body.appendChild(popupBox);

// Create The Close Span
let closeButton = document.createElement("span");

// Create The Close Button Text
let closeButtonText = document.createTextNode("X");

// Append Text To Close Button
closeButton.appendChild(closeButtonText);

// Add Class To Close Button
closeButton.className = "close-button";

// Create The Close Button To The Popup Box
popupBox.appendChild(closeButton);

});

});

// Close Popup
document.addEventListener("click", function (e) {

if (e.target.className === "close-button") {

// Remove The Current Popup
e.target.parentNode.remove();

// Remove Overlay
document.querySelector(".popup-overlay").remove();

}

});

// End Gallery

// Start Nav Bullets

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

elements.forEach(ele => {

ele.addEventListener("click", (e) => {

    e.preventDefault();

document.querySelector(e.target.dataset.section).scrollIntoView({

behavior: "smooth"

});

});

});

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// End Nav Bullets

// Handle Active State
function handleActive(ev) {

// Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

bulletsSpan.forEach(span => {

span.classList.remove("active");

});

if (bulletLocalItem === 'block') {

bulletsContainer.style.display = 'block';

document.querySelector(".bullets-option .yes").classList.add("active");

} else {

bulletsContainer.style.display = 'none';

document.querySelector(".bullets-option .no").classList.add("active");

}

}

bulletsSpan.forEach(span => {

span.addEventListener("click", (e) => {

if (span.dataset.display === 'show') {

bulletsContainer.style.display = 'block';

localStorage.setItem('bullets_option', 'block');

} else {

bulletsContainer.style.display = 'none';

localStorage.setItem('bullets_option', 'none');

}

handleActive(e);

});

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

// localStorage.clear();
localStorage.removeItem("color_option");
localStorage.removeItem("background_option");
localStorage.removeItem("bullets_option");

// Reload Window
window.location.reload();

}

// Toggle Menu
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");
 
toggleBtn.onclick = function (e) {

    // Stop Propagation
e.stopPropagation();

    // Toggle Class 'menu-active' On Button
this.classList.toggle('menu-active');

 // Toggle Class 'open' On Links
tLinks.classList.toggle('open');

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener('click', (e) => {

if (e.target !== toggleBtn && e.target !== tLinks) {

// Check If Menu Is Open
if (tLinks.classList.contains("open"))  {

 // Toggle Class 'menu-active' On Button
toggleBtn.classList.toggle('menu-active');

 // Toggle Class 'open' On Links
tLinks.classList.toggle('open');

}

}

});

// Stop Propagation
tLinks.onclick = function () {

e.stopPropagation();

};