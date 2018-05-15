import {createElement as h} from 'vanilla-commons'
import style from './style.css'

export default ({name, price, imageName, detailUrl, productInfo}) => {
  const paymentElement = h('div', {className: style.extentedPrice})
  paymentElement.innerHTML = productInfo.paymentConditions

  return h(
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
      paymentElement
    ]
  )
}
