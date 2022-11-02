
const popup = document.getElementById('popup');
const closeButton = popup.querySelector('.close');
const nomore = popup.querySelector('#nomore');

if (document.cookie.match('close')) {
  popup.style.display = 'none';
}

closeButton.addEventListener('click', function () {
  if (nomore.checked) {
    let date = new Date(Date.now() + (86400 * 1000));
    document.cookie = 'popup=close;expires=' + date.toUTCString();
  }

  popup.style.display = 'none';
});
