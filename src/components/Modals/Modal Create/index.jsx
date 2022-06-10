import "./style.css";
import { useState } from "react";
import toast from "react-hot-toast";

const ModalCreate = ({ closeModal, getProducts }) => {
  const [club, setClub] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const baseURL = "http://localhost:3001/";

  const handleCreateShirt = async () => {
    const newShirts = {
      club,
      price,
      description,
      img,
    };

    const res = await fetch(`${baseURL}product/register-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(newShirts),
    });

    if (res.status !== 201) {
      return toast.error("Shirt creation failed!");
    }

    setClub("");
    setPrice(0);
    setDescription("");
    setImg("");
    closeModal();
    getProducts();
    toast.success("Shirt successfully added!");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteiner">
        <div>
          <h3>Add new shirt</h3>
          <button onClick={closeModal}>X</button>
        </div>
        <input
          value={club}
          onChange={(event) => setClub(event.target.value)}
          name="club"
          type="text"
          placeholder="Name of the club"
        />
        <input
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          name="price"
          type="number"
        />
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          name="description"
          type="text"
        />
        <input
          value={img}
          onChange={(event) => setImg(event.target.value)}
          name="img"
          type="text"
          placeholder="Link of image"
        />
        <button onClick={handleCreateShirt}>Add</button>
      </div>
    </div>
  );
};

export default ModalCreate;
