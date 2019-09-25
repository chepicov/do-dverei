const openHamburger = (e) => {
  document.getElementById('slideDown').classList.toggle('header__menu--shown');
}

const openForm = (close, formId) => {
  const id = formId || 'form-full';
  if (formId === 'modal-catalog') {
    ym(55472470, 'reachGoal', 'modal-catalog');
  } 
  document.getElementById('modal-background').classList.toggle('form-background--open');
  document.getElementById(id).classList.toggle('form-full--shown');
}

const toggleDesc = (el) => {
  el.parentNode.getElementsByClassName('desc')[0].classList.toggle('desc--shown');
}

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').classList.add('header--shown');
  } else if (prevScrollpos + 10 < currentScrollPos) {
    document.getElementById('header').classList.remove('header--shown');
    document.getElementById('slideDown').classList.remove('header__menu--shown');
  }
  prevScrollpos = currentScrollPos;
});

window.addEventListener('load', AOS.refresh)

const scrollMain = () => {
  document.getElementById('hits').scrollIntoView({ behavior: 'smooth' });
}

const validate = el => {
  const formId = el.id;
  el.getElementsByClassName('form__input--hidden')[0].value = formId;
  if (el.name.value == '') {
    alert('Введите Ваше Имя!');
    return false;
  } if (el.phone.value == '') {
    alert('Введите Ваш номер телефона!');
    return false;
  } if (el.phone.value.replace(/\D+/g, '').length < 11) {
    alert('Номер телефона некорректен!');
    return false;
  }
  return true;
}
