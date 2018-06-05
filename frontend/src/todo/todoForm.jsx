import React from 'react'

export default props => (
  <div role='form'>
    <div>
      <input id='description' placeholder='Adicione uma tarefa' onChange={props.handleChange}
        value={props.description}></input>
    </div>
    <div>
      <button onClick={props.handleAdd}>Adicionar</button>
      <button onClick={props.handleSearch}>Pesquisar</button>
    </div>
  </div>
)
