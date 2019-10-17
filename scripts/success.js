const getParameterByName = (oldName, url) => {
  if (!url) url = window.location.href;
  let name = oldName.replace(/[\[\]]/g, '\\$&');
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

const goBack = () => {
  window.history.back();
};

const name = getParameterByName('name');
const phone = getParameterByName('phone');

document.getElementById('name').innerHTML = name;
document.getElementById('phone').innerHTML = phone;