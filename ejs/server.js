const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{

    res.render('pages/index', {
        titulo: req.query.titulo,
        valor: req.query.valor,
        minimo: req.query.minimo,
        maximo: req.query.maximo
    })
})


app.listen(8080)
console.log('port 8080 is the magic port')