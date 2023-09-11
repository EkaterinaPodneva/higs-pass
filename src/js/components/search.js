document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('form-btn__open').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search__form_show')
  })

  document.getElementById('header-btn-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search__form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
