import { useState, FormEvent } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [anoNascimento, setAnoNascimento] = useState<number | undefined>();
  const [idade, setIdade] = useState<number | null>(null);

  function calcular(event: FormEvent) {
    event.preventDefault();
    if (anoNascimento !== undefined) {
      const anoAtual = new Date().getFullYear();
      const idadeCalculada = anoAtual - anoNascimento;
      setIdade(idadeCalculada);
    } else {
      setIdade(null);
    }
  }

  return (
    <div className="container">
      <h1 className="title">Descubra sua idade</h1>
      <form className="formContainer" onSubmit={calcular}>
        <div className="nameContainer">
          <label htmlFor="nome" className="label">
            Digite seu nome
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            name="nome"
            id="nome"
            className="input"
            placeholder="Digite seu nome"
          />
        </div>
        <div className="dateContainer">
          <label htmlFor="ano" className="label">
            Digite o ano em que nasceu
          </label>
          <input
            type="number"
            name="ano"
            value={anoNascimento !== undefined ? anoNascimento.toString() : ""}
            onChange={(e) =>
              setAnoNascimento(
                e.target.value ? Number(e.target.value) : undefined
              )
            }
            id="ano"
            className="input"
            placeholder="Digite o ano do nascimento"
          />
        </div>
        <button type="submit" className="submit">
          Descobrir idade
        </button>
      </form>
      {idade !== null && (
        <span className="idade">
          {nome}, você tem: {idade} anos
        </span>
      )}
    </div>
  );
}

export default App;
