import { useState } from "react";
const ManageData = () => {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <p>Valor {number}</p>
      <button onClick={() => setNumber(number + 1)}>Mudar</button>
    </div>
  );
};

export default ManageData;
