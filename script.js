

//--------- Hamburger Menu Logic --------
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeBtn = document.getElementById('close-btn')
const navDrawer = document.getElementById('nav-drawer');
const overlay = document.getElementById('overlay');

/*
function openMenu(){
  navDrawer.classList.add('active');
  if (overlay) overlay.classList.add('active');
  hamburgerBtn.classList.add('is-hidden');
}


function closeMenu(){
  navDrawer.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  hamburgerBtn.classList.remove('is-hidden');
}
*/

function toggleMenu(){
  navDrawer.classList.toggle('active');
  
  overlay.classList.toggle('active');
  
}
/*
hamburgerBtn.addEventListener('click',openMenu);
if(closeBtn) closeBtn.addEventListener('click',closeMenu);
if(overlay) overlay.addEventListener('click',openMenu);

*/

hamburgerBtn.addEventListener('click',toggleMenu);
closeBtn.addEventListener('click',toggleMenu);
overlay.addEventListener('click',toggleMenu);




//------- Dynamic Stylesheet Injection via media-query----
const mobileMediaQuery = window.matchMedia('(max-width: 768px)');
let mobileStyleLink = null;


function handleScreenChange(e){
  if (e.matches){
    if(!mobileStyleLink){
      mobileStyleLink = document.createElement('link');
      mobileStyleLink.rel = 'stylesheet';
      mobileStyleLink.href = 'mobile.css';
      mobileStyleLink.id = 'dynamic-mobile-css';
      document.head.appendChild(mobileStyleLink);
    }
  }

  else{
    if (mobileStyleLink){
      mobileStyleLink.remove();
      mobileStyleLink = null;
    }

    //close the mobile menu if screen is expanded
    navDrawer.classList.remove('active');
    overlay.classList.remove('active');
  }
}

//initial check on load
handleScreenChange(mobileMediaQuery);

// listen for resize events
mobileMediaQuery.addEventListener('change',handleScreenChange);






