import "./App.css";
import UserDetails from "./components/UserDetails";

function App() {
  const pessoas = [
    { nome: "Alexandre", idade: 30, prof: "Programador" },
    { nome: "Anny", idade: 16, prof: "markered" },
    { nome: "Jonas", idade: 30, prof: "Carpinteiro" },
    { nome: "Apellido", idade: 15, prof: "markered" },
  ];

  return (
    <>
      <h2>Seção</h2>
      {pessoas.map((pessoa, i) => (
        <UserDetails
          key={i}
          nome={pessoa.nome}
          idade={pessoa.idade}
          prof={pessoa.prof}
        />
      ))}
    </>
  );
}

export default App;
