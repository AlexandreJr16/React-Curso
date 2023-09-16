const UserDetails = ({ nome, idade, prof }) => {
  return (
    <div>
      <h3>Nome: {nome}</h3>
      <p>Idade: {idade}</p>
      <p>Profissão: {prof}</p>
      {idade >= 18 ? (
        <p>Pode ter habilitação</p>
      ) : (
        <p>Não pode ter habilitação</p>
      )}
      <br />
      <br />
    </div>
  );
};

export default UserDetails;
