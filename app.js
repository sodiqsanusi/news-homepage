const openMobileNavBtn = document.getElementById('nav--hamburgerBtn');
const closeMobileNavBtn = document.getElementById('nav--mobilePanelClose');
const mobileNav = document.querySelector('.nav--mobilePanel');

let isMobileNavOpen = false;

let handleMobileNav = () => {
  isMobileNavOpen = !isMobileNavOpen
  if(isMobileNavOpen){
    mobileNav.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }else{
    mobileNav.style.display = 'none';
    document.body.style.overflow = 'initial';
  }
}

openMobileNavBtn.onclick = handleMobileNav;
closeMobileNavBtn.onclick = handleMobileNav;