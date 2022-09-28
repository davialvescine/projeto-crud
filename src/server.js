const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const db = require('./database');
const router = require('./routes');
const routes = require('./routes');

const app = express();

db.connect()

const schema = new mongoose.Schema({
nome: String,
age: Number,
email: String,
password: String,
});
// MVC model view controller 
const Model = mongoose.model('customers', schema); 

const register = new Model ({
    name: 'davi',
    email: 'davi@gmail.com',
    password: '123456'})
register.save();

//definindo o template engine
app.set('view engine', 'ejs') 
app.set('views', path.join(__dirname, 'views'));

//definindo os arquivos publicos

app.use(express.static(path.join(__dirname, 'public')))

//Habilita o server para receber dados via post ( formulario)
app.use(express.urlencoded({extended: true})) 

//definindo as routes
app.use(express.static(path.join(__dirname, 'routes')));

//404 error
app.use((req, res) => {//middleware
    res.send('Página não encontrada')

})
//executando o servidor 
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listing on port ${port}`))