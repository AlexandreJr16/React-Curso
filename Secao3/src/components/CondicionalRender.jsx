import { useState } from "react";

const CondicionalRender = () => {
  const [name, setName] = useState("Alexandre");
  const mudarNome = () => {
    name === "Alexandre" ? setName("João") : setName("Alexandre");
  };
  return (
    <>
      <h2>Seu nome é {name}</h2>
      {name === "Alexandre" ? (
        <p>Você é o Alexandre</p>
      ) : (
        <p>Você não é o Alexandre</p>
      )}

      <p>Algo em baixo</p>
      <button onClick={mudarNome}>Clique aqui</button>
    </>
  );
};

export default CondicionalRender;
