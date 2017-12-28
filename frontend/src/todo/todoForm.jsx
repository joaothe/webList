import React from 'react'
import TheButton from '../template/theButton'

export default props => (
  <div role='form'>
    <div>
      <input id='description' placeholder='Adicione uma tarefa' onChange={props.handleChange}
        value={props.description}></input>
    </div>
    <div>
      <TheButton onClick={props.handleAdd}></TheButton>
    </div>
  </div>
)
