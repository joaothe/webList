import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search } from './todoActions'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
    }
  }

  render() {
    return (
      <div role='form'>
        <div>
          <input id='description' placeholder='Adicione uma tarefa' onChange={this.props.changeDescription}
          onKeyUp={this.keyHandler}
          value={this.props.description}></input>
        </div>
        <div>
          <button onClick={this.props.handleAdd}>Adicionar</button>
          <button onClick={this.props.handleSearch}>Pesquisar</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => ({description: state.todo.description})
const mapDispatchToProps = dispatch =>
    bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
