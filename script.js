// نمایش بخش‌های مختلف سایت
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
  
    // ذخیره اطلاعات در localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
  
    alert('ثبت‌نام با موفقیت انجام شد!');
    showLogin();
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
      showSection('photo'); // پیش‌فرض: نمایش عکس
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
  
  // بارگذاری تصویر
  function loadImage(event) {
    const image = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function (e) {
      document.getElementById('profile-pic').src = e.target.result;
    };
    
    reader.readAsDataURL(image);
  }
  
  // بارگذاری آهنگ
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