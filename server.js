const http = require('http');//importa o modulo nativo "http"
const colors = require('colors');//importa o módulo colors
const fs = require('fs');// importa o módulo Files System para ler
const path = require('path');//importa módulo para "caminhos" (e rotas se for express)

//simula dados de um banco de dados
const dados = [
    { id: 1, nomedados: "Aqui vai nome dos dados 1", valor: 100},
    { id: 2, nomedados: "Aqui vai nome dos dados 1", valor: 200},
    { id: 3, nomedados: "Aqui vai nome dos dados 1", valor: 300}
];

//criar o servidor
//função callback que recebe a requisição (req) e a resposta (res)
// req (Request): informações sobre pedido do usuário.
//res (Response): objeto para enviar a resposta de volta ao usuário
const server = http.createServer((req, res) =>{

    //log para ver qual URL está sendo acessada no terminal
    console.log('Requisição recebida: ${req.url}' . green);

    //roteamento simple (caminho da URL)
    if (req.url === '/') {
        // lê o arquivo 'index.html' que está na pasta public
        const fliePath = path.join(__dirname, 'public', 'index.html');               
    
        fs.readFile(fliePath, (err, content) =>{
            if(err){
                res.writeHead(500);
                res.end('Erro do servidor');
            }else{
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); 
                res.end(content);
             }

            });   
        }
// rota da API
        else if (req.url ==='/api/dados'){
            res.writheHead(200, {'Content-Type': 'application/json; charset=utf8'});
            res.end(JSON.stringify(dados));9
            }   
            else{
                res.writeHead(404, {'content type': 'text/plain; charset=utf-8'});
                res.end('Página não encontrada (404)');
            }
        
        
        });

        //configurar a porta do servidor
        const PORT = 3000;
        
        //iniciar o servidor usar o listem para ouvir a porta
        server.listen(PORT, () =>{
            console.log(`Servidor rodando https://localhost:${PORT})`.green.bold);

        });