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
let navbar = document.querySelectorAll('nav a');
navbar.forEach((nav, index) => {
  // nav.textContent = navarr;
  let nav1 = siteContent.nav[`nav-item-${index}`];
  nav.textContent = nav1;
  // nav.style.color = 'blue';

})
let sideimg = document.getElementById('cta-img');
sideimg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaText = document.getElementsByClassName('cta-text')[0];

ctaText.getElementsByTagName('h1')[0].textContent = siteContent['cta']['h1'];
ctaText.getElementsByTagName('button')[0].textContent = siteContent['cta']['button'];

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent["main-content"]['middle-img-src']);

let topContent = document.querySelectorAll('.text-content');

topContent[0].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['features-h4'];
topContent[0].getElementsByTagName('p')[0].textContent = siteContent['main-content']['features-content'];

topContent[1].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['about-h4'];
topContent[1].getElementsByTagName('p')[0].textContent = siteContent['main-content']['about-content'];

topContent[2].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['services-h4'];
topContent[2].getElementsByTagName('p')[0].textContent = siteContent['main-content']['services-content'];

topContent[3].getElementsByTagName('h4')[0].textContent = siteContent['main-content']['vision-h4'];
topContent[3].getElementsByTagName('p')[0].textContent = siteContent['main-content']['vision-content'];