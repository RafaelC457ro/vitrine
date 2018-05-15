import {createElement as h} from 'vanilla-commons'
import Siema from 'siema'
import item from '../item'
import style from './style.css'

export default ({reference, recommendation}) => {
  let carousel
  setTimeout(() => {
    carousel = new Siema({
      selector: '.siema'
    })
  }, 100)

  return h('div', {className: style.container}, [
    h('div', {className: style.visited}, [
      h(
        'div',
        {className: style.panel},
        h('p', {className: style.title}, 'Você visitou:')
      ),
      h('div', {className: style.wrapper}, item(reference.item))
    ]),
    h('div', {className: style.suggentions}, [
      h(
        'div',
        {className: style.panel},
        h('p', {className: style.title}, 'e talvez se interesse por:')
      ),
      h('div', {className: style.arrowLeft, onclick: () => carousel.next()}),
      h('div', {className: style.arrowRight, onclick: () => carousel.prev()}),
      h('div.siema', {}, recommendation.map(x => item(x)))
    ])
  ])
}
