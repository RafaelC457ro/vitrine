import {createElement as h} from 'vanilla-commons'
import style from './style.css'

export default ({name, price, imageName, detailUrl}) =>
  h(
    'a',
    {
      className: style.item,
      href: detailUrl
    },
    [
      h(
        'div',
        {className: style.image},
        h('img', {
          src: imageName
        })
      ),
      h('div', {className: style.description}, name),
      h('div', {className: style.price}, ['Por: ', h('b', {}, price)]),
      h('div', {className: style.extentedPrice}, [
        'ou ',
        h('b', {}, '12x de R$20,00')
      ]),
      h('div', {className: style.extentedPrice}, 'sem juros')
    ]
  )
