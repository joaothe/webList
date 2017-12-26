import React, {Component} from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default class Todo extends Component{

  constructor(props){
    super(props)
    this.state = { description: '', list: []}
    this.handleAdd = this.handleAdd.bind(this)
  }

  handleAdd(){
    console.log(this)
  }


  render(){
    return(
      <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoForm description={this.state.description} handleAdd={this.handleAdd}/>
        <TodoList/>
      </div>
    )
  }

}
