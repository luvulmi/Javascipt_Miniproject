const popup = document.getElementById('popup');
const closeButton = popup.querySelector('.close');
const nomore = popup.querySelector('#nomore');

if (document.cookie.match('an-bwa')) {
  popup.style.display = 'none';
}

closeButton.addEventListener('click', function () {
  if (nomore.checked) {
    let date = new Date();
    date.setDate( date.getDate() + 2 );
    document.cookie = 'popup=an-bwa;expires='+date.toUTCString();
  }

  popup.style.display = 'none';
});
