const openHamburger = (e) => {
  document.getElementById('slideDown').classList.toggle('header__menu--shown');
}

const openForm = (id) => {
  if (id) {
    document.getElementById('form-full').classList.toggle('form-full--on');
    setTimeout(() => {
      document.getElementById('form-full').classList.toggle('form-full--shown');
    }, 300);
  } else {
    document.getElementById('form-full').classList.toggle('form-full--shown');
    setTimeout(() => {
      document.getElementById('form-full').classList.toggle('form-full--on');
    }, 100);
  }
}

const toggleDesc = (group) => (id) => {
  document.getElementsByClassName(`${group} desc`)[id - 1].classList.toggle('desc--shown');
}

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').classList.add('header--shown');
  } else if (prevScrollpos + 30 < currentScrollPos) {
    document.getElementById('header').classList.remove('header--shown');
    document.getElementById('slideDown').classList.remove('header__menu--shown');
  }
  prevScrollpos = currentScrollPos;
});
