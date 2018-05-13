import style from './style.css'

const h1 = document.createElement('h1')

h1.textContent = 'Vitrine'
h1.setAttribute('class', style.title)

document.body.appendChild(h1)
