'use strict'

require('dotenv').config()
const path = require('path')

const users = require(path.join(__dirname, 'functions', 'users'))

const curtidas = require(path.join(__dirname, 'functions', 'curtidas'))

const comentarios = require(path.join(__dirname, 'functions', 'comentarios'))

const logs = require(path.join(__dirname, 'functions', 'logs'))


module.exports = {
  users: (event, context) => {
    if (event.resource === '/users' && event.httpMethod === 'GET') return users.get(event, context)
    if (event.resource === '/users' && event.httpMethod === 'POST') return users.post(event, context)
    if (event.resource === '/users' && event.httpMethod === 'PUT') return users.put(event, context)
    if (event.resource === '/users' && event.httpMethod === 'DELETE') return users.remove(event, context)
    if (event.resource === '/users/{id}' && event.httpMethod === 'GET') return users.get(event, context)
  },
  curtidas: (event, context) => {
    if (event.resource === '/curtidas' && event.httpMethod === 'GET') return curtidas.get(event, context)
    if (event.resource === '/curtidas' && event.httpMethod === 'POST') return curtidas.post(event, context)
    if (event.resource === '/curtidas' && event.httpMethod === 'PUT') return curtidas.put(event, context)
    if (event.resource === '/curtidas' && event.httpMethod === 'DELETE') return curtidas.remove(event, context)
    if (event.resource === '/curtidas/{id}' && event.httpMethod === 'GET') return curtidas.get(event, context)
  },
  comentarios: (event, context) => {
    if (event.resource === '/comentarios' && event.httpMethod === 'GET') return comentarios.get(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'POST') return comentarios.post(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'PUT') return comentarios.put(event, context)
    if (event.resource === '/comentarios' && event.httpMethod === 'DELETE') return comentarios.remove(event, context)
    if (event.resource === '/comentarios/{id}' && event.httpMethod === 'GET') return comentarios.get(event, context)
  },
  logs: (event, context) => {
    if (event.resource === '/logs' && event.httpMethod === 'GET') return logs.get(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'POST') return logs.post(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'PUT') return logs.put(event, context)
    if (event.resource === '/logs' && event.httpMethod === 'DELETE') return logs.remove(event, context)
    if (event.resource === '/logs/{id}' && event.httpMethod === 'GET') return logs.get(event, context)
  }
}
