import Header from "./components/Headers";
import Footer from "./components/Footer";
import Home from "./components/Home";
import React from "react";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

const App = () => {
  const [shirts, setShirts] = useState([]);

  const baseURL = "https://api-crud-shirts.herokuapp.com/";

  const getProducts = async () => {
    const res = await fetch(`${baseURL}product/all-product`, {
      method: "GET",
      mode: "cors",
    });
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
      <Home shirts={shirts} getProducts={getProducts} />
      <Footer />
    </>
  );
};

export default App;
