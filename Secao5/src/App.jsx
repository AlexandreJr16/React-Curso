import "./App.css";
import MyForm from "./assets/components/MyForm";

function App() {
  return (
    <>
      <h1>Secao 5</h1>
      <MyForm
        user={{
          name: "Alexandre",
          email: "gamerapsj@gmail.com",
          texto: "Opa",
          role: "advogado",
        }}
      />
    </>
  );
}

export default App;
