const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        defaultLayout:'index.hbs',        
    })
)

app.set('view engine', 'hbs');
app.set('views', './views');

app.get('/', (req,res)=>{
    res.render('datos',{
    nombre:'Daniel',
    apellido:'Sanchez',
    edad: 52,
    email: 'danielsanchez@hotmil.com',
    telefono: '1552544',
    fyh: new Date().toLocaleString(),
    })
})


//Server
const PORT = 8080;
const server = app.listen(PORT, ()=>{
console.log(`Servidor levantado en puerto ${server.address().port}`)});
server.on('error', (error)=>console.log(`error en servidor ${error}`))

