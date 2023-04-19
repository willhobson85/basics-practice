const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondElement = document.querySelector('.second')
const timeElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const toggleBtn = document.querySelector('.toggle')

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

toggleBtn.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark Mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light Mode'
  }
})

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  hourElement.style.transform = `translate(-50%, -100%) rotate(${scale((hoursForClock * 60))}, 0, 11, 0, 360)}deg)`
  minuteElement.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
  secondElement.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`

  timeElement.innerHTML = `${hoursForClock === 0 ? `12` : hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds} ${ampm}`
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)