const progress = document.getElementById('progress')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

nextBtn.addEventListener('click', () => {
  if (currentActive < circles.length) {
    currentActive++
  }
  updateCircles()
})

prevBtn.addEventListener('click', () => {
  if (currentActive > 1) {
    currentActive--
  }
  updateCircles()
})

const updateCircles = () => {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (currentActive === 1) {
    prevBtn.disabled = true
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true
  } else {
    prevBtn.disabled = false
    nextBtn.disabled = false
  }
}
