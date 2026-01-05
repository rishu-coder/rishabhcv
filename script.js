const themeBtn = document.getElementById('themeBtn');
const year = document.getElementById('year');
const searchBox = document.getElementById('searchBox');
const items = [...document.querySelectorAll('.item')];

year.textContent = new Date().getFullYear();

const saved = localStorage.getItem('theme');
if (saved === 'light') document.documentElement.classList.add('light');

themeBtn?.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
});

searchBox?.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  items.forEach(el => {
    const text = (el.innerText + " " + (el.dataset.tags || "")).toLowerCase();
    el.style.display = text.includes(q) ? '' : 'none';
  });
});
