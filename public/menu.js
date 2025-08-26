// Dropdown menu logic for click and keyboard navigation

// Get all menu elements
const menus = Array.from(document.querySelectorAll('.menu'));

// Helper to close all dropdowns
function closeAllMenus() {
  menus.forEach(menu => {
    menu.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
}

// Open a menu by index
function openMenu(index) {
  closeAllMenus();
  const menu = menus[index];
  if (menu) {
    menu.classList.add('open');
    menu.setAttribute('aria-expanded', 'true');
    menu.focus();
  }
}

// Click to open/close dropdown
menus.forEach((menu, idx) => {
  menu.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.contains('open');
    closeAllMenus();
    if (!isOpen) {
      menu.classList.add('open');
      menu.setAttribute('aria-expanded', 'true');
    }
  });

  // Keyboard navigation
  menu.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      openMenu((idx + 1) % menus.length);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      openMenu((idx - 1 + menus.length) % menus.length);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const isOpen = menu.classList.contains('open');
      closeAllMenus();
      if (!isOpen) {
        menu.classList.add('open');
        menu.setAttribute('aria-expanded', 'true');
      }
    } else if (e.key === 'Escape') {
      closeAllMenus();
      menu.blur();
    } else if (e.key === 'Tab') {
      closeAllMenus();
    }
  });
});

// Close dropdowns when clicking outside
document.addEventListener('click', closeAllMenus);

// Optional: Close dropdowns on window blur
window.addEventListener('blur', closeAllMenus);