1) 
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});

connection.query("SELECT * FROM CARROS WHERE COR = 'VERDE'", (error, results) => {
  if (error) throw error;
  console.log('Carros da cor verde:');
  console.log(results);
});




2) 
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});

connection.query("SELECT * FROM LOCAÇÕES WHERE CODCARRO = 3", (error, results) => {
  if (error) throw error;
  console.log('Locações do carro código 3:');
  console.log(results);
});




3)  
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});

connection.query("SELECT L.*, C.NOME_CLIENTE, C.TELEFONE FROM LOCAÇÕES L JOIN CLIENTES C ON L.CODCLIENTE = C.CÓDIGO JOIN CARROS CA ON L.CODCARRO = CA.CÓDIGO WHERE CA.COMBUSTÍVEL IN ('GASOLINA', 'ETANOL')", (error, results) => {
  if (error) throw error;
  console.log('Locações dos carros à Gasolina e Etanol com os clientes e telefones:');
  console.log(results);
});




4)  
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});
connection.query("SELECT * FROM CARROS WHERE ESTÁ_DISPONIVEL = 'SIM' AND CÓDIGO NOT IN (SELECT DISTINCT CODCARRO FROM LOCAÇÕES)", (error, results) => {
  if (error) throw error;
  console.log('Carros disponíveis para locação:');
  console.log(results);
});




5) 
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});

connection.query(`CREATE PROCEDURE SP_LocacoesPorCarro(IN carroCodigo INT)
                  BEGIN
                    SELECT * FROM LOCAÇÕES WHERE CODCARRO = carroCodigo;
                  END`, (error) => {
  if (error) throw error;
  console.log('Stored Procedure SP_LocacoesPorCarro criada com sucesso!');
});




6)  
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});

connection.query(`CREATE PROCEDURE SP_LocacoesCombustivelClientes()
                  BEGIN
                    SELECT L.*, C.NOME_CLIENTE, C.TELEFONE 
                    FROM LOCAÇÕES L 
                    JOIN CLIENTES C ON L.CODCLIENTE = C.CÓDIGO 
                    JOIN CARROS CA ON L.CODCARRO = CA.CÓDIGO 
                    WHERE CA.COMBUSTÍVEL IN ('GASOLINA', 'ETANOL');
                  END`, (error) => {
  if (error) throw error;
  console.log('Stored Procedure SP_LocacoesCombustivelClientes criada com sucesso!');
});




7)   
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});
connection.query(`CREATE PROCEDURE SP_CarrosDisponiveis()
                  BEGIN
                    SELECT * FROM CARROS 
                    WHERE ESTÁ_DISPONIVEL = 'SIM' 
                    AND CÓDIGO NOT IN (SELECT DISTINCT CODCARRO FROM LOCAÇÕES);
                  END`, (error) => {
  if (error) throw error;
  console.log('Stored Procedure SP_CarrosDisponiveis criada com sucesso!');
});




8)  
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'phpmyadmin',
  password: 'aluno',
  database: 'CARROS_PROF'
});
connection.query(`CREATE PROCEDURE SP_AdicionarCliente(IN nomeCliente VARCHAR(50), IN telefone VARCHAR(50), IN sexo VARCHAR(15), IN idade INT)
                  BEGIN
                    INSERT INTO CLIENTES (NOME_CLIENTE, TELEFONE, SEXO, IDADE) VALUES (nomeCliente, telefone, sexo, idade);
                  END`, (error) => {
  if (error) throw error;
  console.log('Stored Procedure SP_AdicionarCliente criada com sucesso!');
});
