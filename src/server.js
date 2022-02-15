const express = require('express')
const path = require('path')

const app = express()

//definindo template engine

app.set('view engine', 'ejs')

//definindo os arquivos publicos

app.use(express.urlencoded({ extended: true }))

//rotas
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Titulo Teste'
  })
})

//404 error (not foud)

app.use((req, res) => {
  res.send('Página não encontrada!')
})
