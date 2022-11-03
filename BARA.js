// ========= popup ==========
const popup = document.getElementById('popup'),
  closeButton = popup.querySelector('.close'),
  nomore = popup.querySelector('#nomore');

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

// =========== Tab ================
const besttop5 = document.querySelector('.besttop5'),
  besttab = besttop5.querySelector('.besttab'),
  tabBtn = besttop5.querySelectorAll('.besttab a'),
  contents = besttop5.querySelector('.best_contents'),
  content1 = document.getElementById('multi');

let preBtn = tabBtn[0],
  preContent = content1;

// 버튼 클릭 시 동작할 함수
function Btn_click(e) {
  e.preventDefault();
  let currentContent = contents.querySelector(e.target.getAttribute('href'));

  if (e.target.hasAttribute('href')) {
    preBtn.classList.remove('selected');
    e.target.classList.add('selected');

    preContent.style.display = "none";
    currentContent.style.display = "block";

    preBtn = e.target;
    preContent = currentContent;
  }
}

// 첫번째 내용 보이기
content1.style.display = "block";

// 클릭 이벤트
besttab.addEventListener('click', Btn_click);
// besttab.addEventListener('click', function (e) {
//   Btn_click(e);
// })
