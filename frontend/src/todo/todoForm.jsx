import React from 'react'
import TheButton from '../template/theButton'

export default props => (
  <div role='form'>
    <div>
      <input id='description' placeholder='Adicione uma tarefa'></input>
    </div>
    <div>
      <TheButton hide={true}></TheButton>
    </div>
  </div>
)
