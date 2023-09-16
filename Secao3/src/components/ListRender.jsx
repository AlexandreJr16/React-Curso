import { useState } from "react";

const ListRender = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Mateus" },
    { id: 2, name: "Alexandre" },
    { id: 3, name: "Anny" },
    { id: 4, name: "João" },
    { id: 5, name: "Paula" },
    { id: 6, name: "Anna" },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 7);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      <ul>
        {users.map((item) => (
          <li key={item.id}>{item.name} </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete Random</button>
    </div>
  );
};

export default ListRender;
