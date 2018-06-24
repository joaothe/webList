import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription } from './todoActions'

const TodoForm = props => {

  const keyHandler = (e) => {
    if (e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd()
    }
  }

  return (
    <div role='form'>
      <div>
        <input id='description' placeholder='Adicione uma tarefa' onChange={props.changeDescription}
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

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
