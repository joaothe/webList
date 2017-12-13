module.exports = function(req, res, next) {
  //Habilitar acesso de qualquer origem... Aplicacao separada - front - back
  res.header('Access-Control-Allow-Origin', '*')
  //Métodos permitidos
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
}
