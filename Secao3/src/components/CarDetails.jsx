const CarDetails = ({ marca, cor }) => {
  return (
    <div>
      <div>
        <h2>Os detalhes do carro são:</h2>
        <ul>
          <li>{cor}</li>
          <li>{marca}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarDetails;
