const mongoose = require('mongoose')
const debug = require('debug')('back:db');

const uri = process.env.MONGO_DB_URL

mongoose.connect(uri, function () {
  debug('La conexión a la base de datos se realizó correctamente')
})
