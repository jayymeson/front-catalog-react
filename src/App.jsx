import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
  const [shirts, setShirts] = useState([]);

  const baseURL = "http://localhost:3001/";

  const getProducts = async () => {
    const res = await fetch(`${baseURL}product/all-product`);
    const productList = await res.json();
    console.log(productList);
    setShirts(productList);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Toaster position="bottom-center" />
      <Header getProducts={getProducts}/>
      <Home shirts={shirts} />
      <Footer />
    </>
  );
};

export default App;
