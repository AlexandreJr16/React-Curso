import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";
import { usePost } from "./hooks/usePost";

const url = "http://localhost:3000/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();

  //get produtos

  const [data] = useFetch(url);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  //post produtos

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const addedProduct = await usePost(url, name, price);

    //carregamento dinamico

    await setProducts((prevProducts) => [...prevProducts, addedProduct]);
    setName("");
    setPrice(0);
  };

  const handleName = (e: Event) => {
    setName(e.target.value);
  };
  const handlePrice = (e: Event) => {
    if (!isNaN(Number(e.target.value))) setPrice(e.target.value);
    console.log(price);
  };
  return (
    <>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} | {product.price}
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" placeholder="name" onChange={handleName} />
          <br></br>
          <label>Price:</label>
          <input type="text" placeholder="price" onChange={handlePrice} />
          <input type="submit" value={"Enviar"} />
        </form>
      </div>
    </>
  );
};
export default App;
