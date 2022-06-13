import "./style.css";
import Card from "../Card";
import { useState } from "react";

const Home = ({ shirts, getProducts }) => {
  const [filteredShirtsList, setfilteredShirtsList] = useState([]);

  const filterShirtsList = (event) => {
    setfilteredShirtsList(
      shirts.filter((shirts) => {
        return shirts.club
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      })
    );
  };

  return (
    <div className="home-conteiner">
      <h2>Shirts Available</h2>
      <input
        onChange={filterShirtsList}
        type="text"
        name=""
        id=""
        placeholder="Filter by name"
      />
      <div>
        {filteredShirtsList.length > 0
          ? filteredShirtsList.map((shirts) => {
              return (
                <Card
                  getProducts={getProducts}
                  key={shirts._id}
                  shirts={shirts}
                />
              );
            })
          : shirts.map((shirts) => {
              return (
                <Card
                  getProducts={getProducts}
                  key={shirts._id}
                  shirts={shirts}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Home;
