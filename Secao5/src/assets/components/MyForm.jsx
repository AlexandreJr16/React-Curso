import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  const [nome, setnome] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [texto, setTexto] = useState(user ? user.texto : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleSubmit = () => {
    event.preventDefault();
    console.log("Enviando " + nome + " " + email + " " + texto);

    setnome("");
    setEmail("");
    setTexto("");
    setRole("");
  };
  const handleName = (e) => {
    setnome(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleTexto = (e) => {
    setTexto(e.target.value);
  };
  const handleRole = (e) => {
    setRole(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => handleName(e)}
          />
        </div>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => {
              handleEmail(e);
            }}
          />
        </label>
        <label htmlFor="texto">
          <span>Texto:</span>
          <textarea
            onChange={handleTexto}
            value={texto}
            name="texto"
          ></textarea>
        </label>
        <label>
          <span>Função do sistema:</span>
          <select name="role" onChange={handleRole} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="advogado">Advogado</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default MyForm;
