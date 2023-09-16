const Container = ({ children, valor }) => {
  return (
    <div>
      <h2>Esse é o titulo do container</h2>
      <h1>{children}</h1>
      <p>O valor é {valor}</p>
    </div>
  );
};

export default Container;
