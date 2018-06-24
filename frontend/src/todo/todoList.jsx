import React from 'react'
import { connect } from 'react-redux'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td><button className="styledButton" onClick={() => props.handleMarkAsDone(todo)}>Marcar como feito</button></td>
        <td><button className="styledButton" onClick={() => props.handleMarkAsPending(todo)}>Marcar como pendente</button></td>
        <td><button className="styledButton" onClick={() => props.handleRemove(todo)}>Remover</button></td>
      </tr>
    ))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  )

}

const mapStateToProps = state => ({list: state.todo.list})
export default connect(mapStateToProps)(TodoList)
