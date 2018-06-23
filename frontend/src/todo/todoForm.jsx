import React from 'react'

export default props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    }
  }

  return (
    <div role='form'>
      <div>
        <input id='description' placeholder='Adicione uma tarefa' onChange={props.handleChange}
          onKeyUp={keyHandler}
          value={props.description}></input>
      </div>
      <div>
        <button onClick={props.handleAdd}>Adicionar</button>
        <button onClick={props.handleSearch}>Pesquisar</button>
      </div>
    </div>
  )
}
