// ======================== popup =========================
const popup = document.getElementById('popup'),
  closeButton = popup.querySelector('.close'),
  nomore = popup.querySelector('#nomore');

// 하루동안 안보기 체크 경우
if (document.cookie.match('close')) {
  popup.style.display = 'none';
}

// 닫기 버튼 눌렀을 때 닫히기
closeButton.addEventListener('click', function () {
  if (nomore.checked) { // 하루동안 안보기 눌렀을 경우
    let date = new Date(Date.now() + (86400 * 1000));
    document.cookie = 'popup=close;expires=' + date.toUTCString();
  }

  popup.style.display = 'none';
});

// ====================== Tab ============================
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


// =========================== Accodion ==============================
const faq = document.querySelector('.faq'),
  faqList = faq.querySelectorAll('.faq li');

// 처음에 다 숨기기
// 눌렀을 때 내용 보이기
// 다시 누르면 내용 숨기기

// 모두 숨기기 함수
function hide() {
  for (let answer of faqList) {
    answer.classList.add('hidden');
  }
}
// 내용 변경 함수
function textReplace(target, sign1, sign2) {
  target.children[0].children[1].textContent = target.children[0].children[1].textContent.replace(sign1, sign2);
}

// 처음에 모두 숨기기 실행
hide();

for (let p of faqList) {
  p.addEventListener('click', function () {
    if (p.classList.contains('hidden')) {
      this.classList.remove('hidden');
      textReplace(p, '+', '-');
    } else {
      p.classList.add('hidden');
      textReplace(p, '-', '+');
    }
  });
}

// ===================== scroll_Top ==========================
const scroll_top = document.querySelector('.scrollTop');

// top버튼 생성
window.addEventListener('scroll', function () {
  if (window.pageYOffset >= (this.innerHeight / 4)) {
    scroll_top.classList.add('show');
  } else {
    scroll_top.classList.remove('show');
  }
});

// 마우스 호버 시 효과
scroll_top.addEventListener('mouseenter', function () {
  this.classList.add('hover');
});

scroll_top.addEventListener('mouseleave', function () {
  this.classList.remove('hover');
});

// 탑버튼 클릭 시 상단으로 조금씩 이동
scroll_top.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});

// 새로고침 시 스크롤 상단으로 보내기
window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
}