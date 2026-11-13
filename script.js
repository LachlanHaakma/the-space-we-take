const picker = document.querySelector('#theme');
try { picker.value = localStorage.getItem('space-theme') || 'system'; } catch {}
function applyTheme() {
  if (picker.value === 'system') delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme = picker.value;
}
applyTheme();
picker.addEventListener('change', () => {
  applyTheme();
  try { localStorage.setItem('space-theme', picker.value); } catch {}
});
