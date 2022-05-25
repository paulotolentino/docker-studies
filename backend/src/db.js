const { Pool } = require('pg');

async function connect() {
  if (global.connection) { return global.connection.connect(); }

  const pool = new Pool({
    connectionString: 'postgres://postgres:postgres@172.20.0.4:5432/clientes',
  });

  // apenas testando a conexão
  const client = await pool.connect();
  console.log('Criou pool de conexões no PostgreSQL!');

  const res = await client.query('SELECT NOW()');
  console.log(res.rows[0]);
  client.release();

  // guardando para usar sempre o mesmo
  global.connection = pool;
  return pool.connect();
}

async function selectCustomers() {
  const client = await connect();
  const res = await client.query('SELECT * FROM clientes');
  return res.rows;
}

async function insertCustomer(customer) {
  const client = await connect();
  const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES ($1,$2,$3);';
  const values = [customer.nome, customer.idade, customer.uf];
  const result = await client.query(sql, values);
  return result;
}

module.exports = { selectCustomers, insertCustomer };
