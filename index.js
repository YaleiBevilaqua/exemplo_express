const express = require('express'); //Importou a biblioteca
const app = express(); // Criou a constante que inicializa a biblioteca
const port = 3000;
app.use(express.json())

// O '/' é um parametro passado assim que é iniciado um site
app.get('/', (request, response) => {//no primeiro parenteses é falado que necessita de uma requisição, no caso é a barra. e a response que é o texto, no caso é o "Estoy aqui"
    response.send('Estoy aqui');
})
app.get('/noticias', (request, response) => {
    response.send('<html><body><i>Página de noticias legais</i></body></html>');//Coloquei um código html alí dentro

});

app.post('/soma',(request, response) => {
const body = request.body;
const numero1 = body.numero1;
const numero2 = body.numero2;
const resultado ={
    resultado: numero1 + numero2
}
    response.send(resultado)
});


app.get('/noticias/do-jogo', (request, response) => {
    const Jogo = {
        id: 1,
        texto: "O jogo é um jogo que está sendo jogado por todos a todo momento",
        autor: "Desconhecido"
    }
    response.send(Jogo);//
})



app.listen(port, () =>{ // O aplicativo vai ouvir a porta 3000 e as variaveis de conexão e inicia na porta 3000
    console.log("Servidor iniciado na porta " + port)
})
