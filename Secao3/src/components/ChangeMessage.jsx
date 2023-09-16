const ChangeMessage = ({ handleMessage }) => {
  const messages = ["Alexandre", "Anny", "João", "Anna"];
  return (
    <>
      {messages.map((msg, i) => (
        <button
          key={i}
          onClick={() => {
            handleMessage(msg);
          }}
        >
          {msg}
        </button>
      ))}
    </>
  );
};

export default ChangeMessage;
