const buttonElements = document.querySelectorAll('.faq-toggle')

buttonElements.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active')
  })
})
