import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, search, description } = this.props
    if (e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    }
  }

  render() {
    const { add, search, description } = this.props
    return (
      <div role='form'>
        <div>
          <input id='description' placeholder='Adicione uma tarefa' onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          value={this.props.description}></input>
        </div>
        <div>
          <button onClick={() => add(description)}>Adicionar</button>
          <button onClick={() => search()}>Pesquisar</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ add, changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
