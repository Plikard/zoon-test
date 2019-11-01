document.addEventListener('click', function (e) {
  let dropDowns = [...document.querySelectorAll('.js-panel-menu')];
  dropDowns.forEach(dd => {
    (dd === e.target && dropDowns.includes(e.target)) ? dd.classList.toggle('panel__menu_active') : dd.classList.remove('panel__menu_active')
  })
})