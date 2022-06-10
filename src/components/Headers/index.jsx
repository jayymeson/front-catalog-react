import "./style.css";
import logo from "../../assets/icon/logo.png";
import checkoutIcon from "../../assets/icon/sacola.svg";
import Add from "../../assets/icon/icons8-mais-28.38.png";
import { toast } from "react-hot-toast";
import ModalCreate from "../Modals/Modal Create";
import { useState } from "react";

const Header = ({getProducts}) => {
  const [showModalCreate, setshowModalCreate] = useState(false);

  const handleShowModalCreate = () => {
    setshowModalCreate(!showModalCreate);
  };

  return (
    <>
      <div className="header-container">
        <div className="headerTitle-conteiner">
          <img alt="Logo Shirts JM" src={logo} />
          <h2>Shirts JM</h2>
        </div>
        <div className="headerOptions-conteiner">
          <img
            onClick={() => toast.error("Under development")}
            className="Icon"
            alt="CheckOut"
            src={checkoutIcon}
          />
          <img
            onClick={handleShowModalCreate}
            className="Icon"
            src={Add}
            alt="Add item"
          />
        </div>
      </div>
      {showModalCreate && (
        <ModalCreate closeModal={handleShowModalCreate} getProducts={getProducts} />
      )}
    </>
  );
};

export default Header;
