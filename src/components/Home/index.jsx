import "./style.css";
import { useState, useEffect } from "react";
import Card from "../Card";

const Home = () => {
  const [shirts, setShirts] = useState([]);

  const baseURL = "http://localhost:3001/";

  const getProducts = async () => {
    const res = await fetch(`${baseURL}product/all-product`);
    const productList = await res.json();

    setShirts(productList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home-conteiner">
      <h2>Shirts Available</h2>
      <div>
        {shirts.map((shirts) => {
          return <Card key={shirts._id} shirts={shirts} />;
        })}
      </div>
    </div>
  );
};

export default Home;
