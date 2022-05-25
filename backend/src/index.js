const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/clientes', async (req, res) => {
  console.log('SELECT * FROM CLIENTES');
  const clientes = [{
    id: 1, nome: 'PS', idade: 29, uf: 'São Paulo',
  }]; // await db.selectCustomers();
  console.log(clientes);
  res.send(clientes);
});

app.post('/cliente', async (req, res) => {
  console.log('INSERT INTO CLIENTES');
  const { nome, idade, uf } = req.body;
  const clientes = await db.insertCustomer(nome, idade, uf);
  console.log(clientes);
  res.send(clientes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
