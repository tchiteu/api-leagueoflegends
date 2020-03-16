const express = require("express");
const axios = require("axios");

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, usuario");
    next();
});

app.get('/', (req, res) => {
    let api_key = "RGAPI-1d38dd1b-5c0a-42f4-a451-4a6c6dbb0829"
    let usuario = req.headers.usuario
    let url = `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${usuario}?api_key=${api_key}`
    
    axios.get(url).then(resposta => {
        res.send(resposta.data)
    }).catch(err => {
        res.status(err.response.data.status.status_code) 
        res.end(err.response.data.status.message)

        res.send()
    })
})

app.listen(8081);