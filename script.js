// نمایش بخش‌های مختلف سایت
function showSection(section) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

// ثبت‌نام با Firebase
function signUp() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById('message').innerText = 'ثبت‌نام موفق بود!';
    })
    .catch(error => {
      document.getElementById('message').innerText = error.message;
    });
}

// ورود با Firebase
function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById('message').innerText = 'ورود موفق!';
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('user-name').innerText = email;
      showSection('music'); // یا photo/video به دلخواه
    })
    .catch(error => {
      document.getElementById('message').innerText = error.message;
    });
}

// تغییر فرم‌ها (در صورت نیاز)
function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// بارگذاری تصویر
function loadImage(event) {
  const image = event.target.files[0];
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById('profile-pic').src = e.target.result;
  };
  reader.readAsDataURL(image);
}

// بارگذاری موزیک
function loadMusic(event) {
  const file = event.target.files[0];
  const player = document.getElementById('music-player');
  if (file) {
    const url = URL.createObjectURL(file);
    player.src = url;
    player.style.display = 'block';
    player.play();
  }
}

// بارگذاری ویدیو
function loadVideo(event) {
  const file = event.target.files[0];
  const player = document.getElementById('video-player');
  if (file) {
    const url = URL.createObjectURL(file);
    player.src = url;
    player.style.display = 'block';
    player.play();
  }
}