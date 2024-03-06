const express = require('express')
const app = express()


app.get('/',function(req, res){
    res.send('Rota Principal')             
})
app.get('/hello',function(req, res){
    res.send('Chegou a resposta')             
})
app.get('/nome',function(req, res){
    res.send('Rafa Leite')             
})

app.listen(3000, function(){
    console.log('servidor aberto na porta 3000')
})