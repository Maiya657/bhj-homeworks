const dropdownValue = document.querySelector('.dropdown__value');
const dropdownItems = document.querySelectorAll('.dropdown__item');
const dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', () => {
  dropdownList.classList.toggle('dropdown__list_active');
  return false; 
});

Array.from(dropdownItems).forEach((dropdownItem) => {
  dropdownItem.onclick = function() {
    dropdownValue.textContent = dropdownItem.textContent;
    dropdownList.classList.remove('dropdown__list_active');
    return false;
  }
});