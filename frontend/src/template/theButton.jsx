import React from 'react'
import If from './if'

export default props => (
  <If test={!props.hide}>
    <button className={'btn'+ props.style}
      onClick={props.onClick}>
        Adicionar
      </button>
  </If>
)
