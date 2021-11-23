//extra filters in the aside section from the desktop view

const seeMore = document.querySelector('.see-more');

seeMore.addEventListener('click', (e) => {
  const extraFilters = document.getElementById('extra-filters');
  const asideOptionsDiv = document.getElementsByClassName('aside-options')[0];
  const seeMoreButton = document.getElementsByClassName('see-more')[0];

  if (extraFilters.style.display === 'none') {
    extraFilters.style.display = 'block';
    asideOptionsDiv.style.borderBottom = 'none';
    seeMoreButton.innerHTML = 'See Less';
  } else {
    extraFilters.style.display = 'none';
    asideOptionsDiv.style.borderBottom = '1px solid var(--border-grey)';
    seeMoreButton.innerHTML = 'See More';
  }
});

// open and close navbar from mobile and tablet view

const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', (e) => {
  const mobileNav = document.getElementsByClassName(
    'navbar-bottom-categories'
  )[0];
  if (mobileNav.style.display === 'none') {
    mobileNav.style.display = 'block';
    hamburgerMenu.children[0].src = './assets/icons/close-menu.png';
  } else {
    mobileNav.style.display = 'none';
    hamburgerMenu.children[0].src = './assets/icons/hamburger-menu.png';
  }
});

// open and close filters from navbar and tablet view

const filterBy = document.querySelector('.filter-by');

filterBy.addEventListener('click', (e) => {
  const filters = document.getElementsByClassName('filters')[0];
  if (filters.style.display === 'none') {
    filters.style.display = 'block';
  } else {
    filters.style.display = 'none';
  }
});

const closeFilters = document.querySelector('#close-filters');

closeFilters.addEventListener('click', (e) => {
  document.getElementsByClassName('filters')[0].style.display = 'none';
});
