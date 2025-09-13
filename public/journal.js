// Simple page flipping logic
const pages = Array.from(document.querySelectorAll('.notebook-page'));
let currentPage = 0;
function showPage(idx) {
  pages.forEach((p, i) => p.style.display = i === idx ? 'block' : 'none');
}
document.getElementById('prev-page').onclick = () => {
  if (currentPage > 0) currentPage--;
  showPage(currentPage);
};
document.getElementById('next-page').onclick = () => {
  if (currentPage < pages.length - 1) currentPage++;
  showPage(currentPage);
};
showPage(currentPage);
// Page flipping logic with table of contents support
const pages = Array.from(document.querySelectorAll('.notebook-page'));
let currentPage = 0;
function showPage(idx) {
  pages.forEach((p, i) => p.style.display = i === idx ? 'block' : 'none');
  currentPage = idx;
}
document.getElementById('prev-page').onclick = () => {
  if (currentPage > 0) showPage(currentPage - 1);
};
document.getElementById('next-page').onclick = () => {
  if (currentPage < pages.length - 1) showPage(currentPage + 1);
};
// Table of contents buttons
document.querySelectorAll('.toc-btn').forEach(btn => {
  btn.onclick = () => {
    const pageNum = parseInt(btn.getAttribute('data-page'));
    showPage(pageNum);
  };
});
// Start on title page
showPage(0);