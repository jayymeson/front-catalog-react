import toast from "react-hot-toast";
import { useState } from "react";
import "./style.css";

const ModalEdit = ({ closeModal, shirts, getProducts }) => {
  const [club, setClub] = useState(shirts.club);
  const [price, setPrice] = useState(shirts.price);
  const [description, setDescription] = useState(shirts.description);
  const [img, setImg] = useState(shirts.img);

  const baseURL = "http://localhost:3001/";

  const handleEditShirt = async () => {
    const editShirt = {
      club,
      price,
      description,
      img,
    };

    const res = await fetch(`${baseURL}product/update-product/${shirts._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(editShirt),
    });

    if (res.status !== 200) {
      return toast.error("Editing failed!");
    }

    closeModal();
    getProducts();
    toast.success("Shirt updated with sucess");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteiner">
        <div>
          <h3>Edit shirt</h3>
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
        <button onClick={handleEditShirt}>Edit</button>
      </div>
    </div>
  );
};

export default ModalEdit;
