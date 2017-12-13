const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//Retornar o registrado atualizado e validar a atualização
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo
