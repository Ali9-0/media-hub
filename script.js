const firebaseConfig = {
  apiKey: "AIzaSyBQ7urxIHfiCTnyFe_5PcjxGwbDFLL45Q0",
  authDomain: "agfh-a5e59.firebaseapp.com",
  projectId: "agfh-a5e59",
  storageBucket: "agfh-a5e59.firebasestorage.app",
  messagingSenderId: "189053859920",
  appId: "1:189053859920:web:8cd99c84689dcb548db955",
  measurementId: "G-GWFXENXSX8"
};

firebase.initializeApp(firebaseConfig);

function showSection(section) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(function (sec) {
    sec.style.display = 'none'; 
  });
  document.getElementById(section).style.display = 'block';
}

// ثبت‌نام
function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const phone = document.getElementById('reg-phone').value;
  const email = document.getElementById('reg-email').value;

  // ذخیره اطلاعات در Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('ثبت‌نام با موفقیت انجام شد!');
      showLogin();
    })
    .catch((error) => {
      alert(error.message);
    });
}

// ورود
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('user-name').innerText = username;
      showSection('photo');
    })
    .catch((error) => {
      alert('نام کاربری یا رمز عبور اشتباه است.');
    });
}

function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

// بارگذاری عکس
function loadImage(event) {
  const reader = new FileReader();
  reader.onload = function() {
    const output = document.getElementById('profile-pic');
    output.src = reader.result;
  }
  reader.readAsDataURL(event.target.files[0]);
}

// بارگذاری موزیک
function loadMusic(event) {
  const player = document.getElementById('music-player');
  const file = event.target.files[0];
  const objectURL = URL.createObjectURL(file);
  player.style.display = 'block';
  player.src = objectURL;
}

// بارگذاری ویدیو
function loadVideo(event) {
  const player = document.getElementById('video-player');
  const file = event.target.files[0];
  const objectURL = URL.createObjectURL(file);
  player.style.display = 'block';
  player.src = objectURL;
}// ثبت‌نام
function register() {
  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const phone = document.getElementById('reg-phone').value;
  const email = document.getElementById('reg-email').value;

  // ذخیره اطلاعات در localStorage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  localStorage.setItem('phone', phone);
  localStorage.setItem('email', email);

  alert('ثبت‌نام با موفقیت انجام شد!');
  showLogin();  // نمایش فرم ورود بعد از ثبت‌نام
}

// ورود
function login() {
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (username === savedUsername && password === savedPassword) {
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('user-name').innerText = username;
      showSection('photo');  // پیش‌فرض: نمایش عکس
  } else {
      alert('نام کاربری یا رمز عبور اشتباه است.');
  }
}

// تغییر به فرم ثبت‌نام
function showRegister() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
}

// تغییر به فرم ورود
function showLogin() {
  document.getElementById('register-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}
