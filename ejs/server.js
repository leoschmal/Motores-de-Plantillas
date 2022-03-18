const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set('view engine', 'ejs');

const productos = [{"id":"1", "title":"Bicicleta","price":"$49.346.-", "url":"https://cdn2.iconfinder.com/data/icons/miscellaneous-iii-glyph-style/150/cycling-256.png"},{"id":"2", "title":"Monopatín","price":"$23.562.-", "url":"https://cdn1.iconfinder.com/data/icons/sport-fitness-vol-3-1/512/skate_rollers_rolling_street-256.png"},{"id":"3", "title":"Skate","price":"$12.365.-","url":"https://cdn0.iconfinder.com/data/icons/sport-and-fitness-1/32/Sports_and_Fitness_skate_freestyle_skating_skateboard-256.png"}]
let changeView = true;
app.get('/productos', (req, res)=>{
    changeView=!changeView;
    res.render('pages/index', {productos: productos, changeView: changeView});   
    
})
app.post('/productos', (req,res)=>{
    console.log(req.body);
    productos.push(req.body);    
    res.render('pages/index', {productos: productos})
})

app.listen(8080)
console.log('port 8080 is the magic port')