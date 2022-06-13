import "./style.css";
import { toast } from "react-hot-toast";
import edit from "../../assets/icon/escrever.png";
import remove from "../../assets/icon/remover.png";
import ModalRemove from "../Modals/Modal Remove";
import { useState } from "react";
import ModalEdit from "../Modals/Modal Edit";

const Card = ({ shirts, getProducts }) => {
  const [showRemoveModal, setshowRemoveModal] = useState(false);
  const [showEditModal, setshowEditModal] = useState(false);

  const handleShowRemoveModal = () => {
    setshowRemoveModal(!showRemoveModal);
  };

  const handleShowEditModal = () => {
    setshowEditModal(!showEditModal);
  };

  return (
    <>
      <div className="card-conteiner">
        <div className="card-header">
          <p>{`R$${shirts.price.toFixed(2)}`}</p>
          <img src={shirts.img} alt={`Shirt of ${shirts.club}`} />
        </div>
        <h3>{shirts.club}</h3>
        <p>{shirts.description}</p>
        <div className="card-body">
          <img onClick={handleShowEditModal} className="icons" src={edit} title="Edit" alt="Edit icon" />
          <img
            className="icons"
            onClick={handleShowRemoveModal}
            src={remove}
            title="Remove"
            alt="Remove icon"
          />
        </div>
        <button onClick={() => toast.error("Under development")}>OK</button>
      </div>
      {showRemoveModal && (
        <ModalRemove
          closeModal={handleShowRemoveModal}
          shirts={shirts}
          getProducts={getProducts}
        />
      )}
      {showEditModal && (
        <ModalEdit
          closeModal={handleShowEditModal}
          shirts={shirts}
          getProducts={getProducts}
        />
      )}
    </>
  );
};

export default Card;
