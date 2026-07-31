let lst = localStorage.getItem('theme')
let darkModeMql = lst ? lst == 'dark' : window?.matchMedia('(prefers-color-scheme: dark)') || false;

window.onload = () => {
  updateTheme();
}

function toggleTheme() {
  darkModeMql = !darkModeMql;
  updateTheme();
}

function updateTheme() {
  const icon = document.getElementById('theme-icon');
  const screenshot = document.getElementById('screenshot');
  const screenshotM = document.getElementById('screenshot-mobile');
  if (darkModeMql) {
    document.body.classList.add('dark');
    icon.className = 'ti ti-sun';
    localStorage.setItem('theme', 'dark');
    if (screenshot) screenshot.src = '/assets/screenshot-dark.png';
    if (screenshotM) screenshotM.src = '/assets/screenshot-dark-mobile.png';
  } else {
    document.body.classList.remove('dark');
    icon.className = 'ti ti-moon';
    localStorage.setItem('theme', 'light');
    if (screenshot) screenshot.src = '/assets/screenshot-light.png';
    if (screenshotM) screenshotM.src = '/assets/screenshot-light-mobile.png';
  }
}