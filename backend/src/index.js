const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3001;

app.use((req, res, next) => {
  // If origin is a granted domain, return that as allowed origin
  // Otherwise just restrict to
  if (req.headers && req.headers.origin && req.headers.origin.includes('45.93.100.73')) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  }
  res.header('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Timestamp, LastEvaluatedKey, Pragma');
  return next();
});

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/clientes', async (req, res) => {
  console.log('SELECT * FROM CLIENTES');
  const clientes = await db.selectCustomers();
  console.log(clientes);
  res.send(clientes);
});

app.post('/cliente', async (req, res) => {
  console.log('INSERT INTO CLIENTES');
  const { nome, idade, uf } = req.body;
  console.log(nome, idade, uf);
  const clientes = await db.insertCustomer({ nome, idade, uf });
  console.log(clientes);
  res.send(clientes);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
