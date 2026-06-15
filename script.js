function showSection(id) {
  document.querySelectorAll('.content').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
