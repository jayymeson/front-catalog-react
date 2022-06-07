import "./style.css";
import logo from "../../assets/icon/logo.png";
import checkoutIcon from "../../assets/icon/sacola.svg";

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <img alt="Logo Shirts JM" src={logo} />
        <h2>Shirts JM</h2>
      </div>
      <img alt="CheckOut" src={checkoutIcon} />
    </div>
  );
};

export default Header;