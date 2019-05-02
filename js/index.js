const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation Menu
let navbar = document.querySelectorAll('nav a');
navbar.forEach((nav, index) => {
  // nav.textContent = navarr;
  let nav1 = siteContent.nav[`nav-item-${index}`];
  nav.textContent = nav1;
  nav.style.textDecoration = 'none';
  nav.style.color = 'green';

  //Header Image Button and Dom is Awesome
})
let sideimg = document.getElementById('cta-img');
sideimg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.getElementsByClassName('cta-text')[0];

ctaText.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaText.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);


//Features and About
let topContent = document.querySelectorAll('.text-content');
// console.log(topContent);

topContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
topContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

topContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
topContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

//Services and vision
topContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
topContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];

topContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
topContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];

//Contact
let contactInfo = document.getElementsByClassName('contact')[0];
console.log(contactInfo);
contactInfo.getElementsByTagName('h4')[0].textContent = siteContent['contact']['contact-h4'];
contactInfo.getElementsByTagName('p')[0].textContent = siteContent['contact']['address'];
contactInfo.getElementsByTagName('p')[1].textContent = siteContent['contact']['phone'];
contactInfo.getElementsByTagName('p')[2].textContent = siteContent['contact']['email'];

//Footer

let footerInfo = document.getElementsByTagName('footer')[0];
footerInfo.getElementsByTagName('p')[0].textContent = siteContent['footer']['copyright'];

//Appending the Navigation Menu
let nav1 = document.createElement('a');
let nav1desc = document.createTextNode('Company');
// console.log(nav1);
nav1.appendChild(nav1desc);
nav1.style.color = 'green';
nav1.style.textDecoration = 'none';
document.getElementsByTagName('nav')[0].appendChild(nav1);

let nav2 = document.createElement('a');
let nav2desc = document.createTextNode('Reviews');
nav2.appendChild(nav2desc);
nav2.style.color = 'green';
nav2.style.textDecoration = 'none';
document.getElementsByTagName('nav')[0].appendChild(nav2);