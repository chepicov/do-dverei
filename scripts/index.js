function openHamburger(e) {
  document.getElementById('slideDown').classList.toggle('header__menu--shown');
}

function toggleDesc(i) {
  document.getElementsByClassName('desc')[i - 1].classList.toggle('desc--shown');
}
