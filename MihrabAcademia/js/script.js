document.addEventListener("DOMContentLoaded", () => {
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#search-btn");
const searchBox = document.getElementById("search-box");

// Arama formunun açılıp kapanmasını yönet
  searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchForm.classList.toggle("active");
});

// Sayfa dışına tıklayınca formu kapat (sadece form ve buton dışında bir yere tıklanınca)
  document.addEventListener("click", (e) => {
    if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
      searchForm.classList.remove("active");
    }
});

// Arama işlevi
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert(`Aranan kelime: ${searchBox.value}`);
  });
});

// Menüye 'active' sınıfı ekleyip çıkararak görünür hale getirme
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); 
}

// Slayt gösterisi 
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
  });
}

// Slayt fonksiyonlarını yalnızca slayt varsa çalıştır
if (slides.length > 0) {
  showSlide(currentIndex);

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 3000);
}

let slideIndex = 0;
const fotos = document.querySelectorAll('.gundem .foto');
const overlays = document.querySelectorAll('.gundem .overlay');

// Fonksiyon ile slaytları yönetiyoruz
function showSlide(index) {
  if (index >= fotos.length) slideIndex = 0; // Sonraki slayta geçince başa dön
  if (index < 0) slideIndex = fotos.length - 1; // İlk slayttan önce gitme

// Tüm fotoğrafların opaklığını 0 yap
  fotos.forEach(foto => foto.querySelector('img').style.opacity = 0);
  overlays.forEach(overlay => overlay.classList.remove('show'));

// Geçerli fotoğrafı ve yazıyı göster
  fotos[slideIndex].querySelector('img').style.opacity = 1;
  overlays[slideIndex].classList.add('show');
}

// İleri ve geri butonlarıyla slaytları değiştirme fonksiyonu
function changeSlide(direction) {
  slideIndex += direction;
  showSlide(slideIndex);
}

// Sayfa yüklenince ilk fotoğrafı göster
showSlide(slideIndex);
