const express = require('express');
const app = express()
const PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
const server = app.listen(PORT, ()=>{
    console.log(`Servidor levantado en puerto ${server.address().port}`)
})
server.on('error', (error)=>console.log(`hubo un error ${error}`));


app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res)=>{
    res.render('meter.pug',{titulo: req.query.titulo ,valor: req.query.valor, maximo: req.query.maximo, minimo: req.query.minimo})
})