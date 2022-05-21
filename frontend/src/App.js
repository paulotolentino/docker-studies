import React  from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [nome, setNome] = React.useState('');
  const [idade, setIdade] = React.useState('')
  const [uf, setUf] = React.useState('');
  const [clientes, setClientes] = React.useState([])

  React.useEffect(() => {
    axios.get('http://127.1.0.12/clientes').then(res => {
      setClientes(res.data)
    })
  }, [])

  const handleSubmit = () => {
    console.log({nome, idade, uf})
  }

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='nome'>Nome: </label>
            <input id="nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div>
            <label htmlFor='idade'>Idade: </label>
            <input id="idade" type="text" value={idade} onChange={e => setIdade(e.target.value)} />
          </div>
          <div>
            <label htmlFor='uf'>UF: </label>
            <input id="uf" type="text" value={uf} onChange={e => setUf(e.target.value)} />
          </div>
          <input type="submit" value={"Enviar"} />
        </form>

        <table>
          <thead>
            <th>Nome</th>
            <th>Idade</th>
            <th>UF</th>
          </thead>
          <tbody>
            {clientes.map(cliente => (
            <tr>
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