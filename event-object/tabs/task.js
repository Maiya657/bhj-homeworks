(function() {
  const tabsArr = Array.from(document.querySelectorAll('.tab'));
  const tabsContentArr = Array.from(document.querySelectorAll('.tab__content'));
  
  tabsArr.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabsArr.map(tab => tab.classList.remove('tab_active'));
      tab.classList.add('tab_active');

      tabsContentArr.map(tabContent => tabContent.classList.remove('tab__content_active'));
      tabsContentArr[tabsArr.indexOf(tab)].classList.add('tab__content_active');
    });
  });
})();