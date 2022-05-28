import React, { useMemo }  from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('')
  const [uf, setUf] = React.useState('');
  const [clientes, setClientes] = React.useState([])

  const SERVER_IP = useMemo(() => process.env.REACT_APP_SERVER_IP, [])
  const SERVER_PORT = useMemo(() => 3001, [])

  const getClientes = React.useCallback(() => {
    axios.get(`${SERVER_IP}:${SERVER_PORT}/clientes`).then(res => {
      console.log(res.data)
      setClientes(res.data)
    })
  }, [])

  React.useEffect(() => {
    getClientes()
  }, [getClientes])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({nome, idade, uf})
    axios.post(`${SERVER_IP}:${SERVER_PORT}/cliente`, {nome, idade, uf}).then(() => {
      getClientes()
    })
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='nome'>Nome: </label>
            <input id='nome' type='text' value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor='idade'>Idade: </label>
            <input id='idade' type='text' value={idade} onChange={e => setIdade(e.target.value)} />
          </div>
          <div>
            <label htmlFor='uf'>UF: </label>
            <input id='uf' type='text' value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <input type='submit' value='Enviar' />
        </form>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>UF</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.nome}</td>
              <td>{cliente.idade}</td>
              <td>{cliente.uf}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
