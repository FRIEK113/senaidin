const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 2222;
const db = new sqlite3.Database('Database.sqlite');

app.use(express.json());
app.use(express.static(path.join(__dirname, "pages")));

// criando banco de dados
function Tabela() {
    let sql = 
    "CREATE TABLE CADASTROS('ID INTEGER PRIMARY KEY AUTOINCREMENT', 'NOME VARCHAR(100)', 'EMAIL VARCHAR(100)', 'LINKEDIN(500)', 'SENHA(100)')";

    db.run(sql, (err) => {
        if (err) console.log(err);
        else console.log("tabela criada com sucesso!!");
    });
}

// Tabela();

// rota padrão
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/pages/login.html"));
});
// rota enviar
app.post('/enviar', (req, res) => {
    let sql = "INSERT INTO CADASTROS (NOME, EMAIL, LINKEDIN, SENHA) VALUES (?, ?, ?, ?)"
})

// rota cadastro
app.get('/cadastro', (req, res) =>{
    res.sendFile(path.join(__dirname + "/pages/cadastro.html"))
})

app.listen(port, console.log("Rodando..."))