import container from './container'

const init = selector => ({data}) => {
  console.log(data)
  const wrapper = document.querySelector(selector)
  wrapper.appendChild(container(data))
  delete window.X
}

export default ({selector, url}) => {
  window.X = init(selector)

  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = url

  document.head.appendChild(script)
}
