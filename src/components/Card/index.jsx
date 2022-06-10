import "./style.css";
import { toast } from "react-hot-toast";
import edit from "../../assets/icon/escrever.png";
import remove from "../../assets/icon/remover.png";

const Card = ({ shirts }) => {
  return (
    <div className="card-conteiner">
      <div className="card-header">
        <p>{`R$${shirts.price.toFixed(2)}`}</p>
        <img src={shirts.img} alt={`Shirt of ${shirts.club}`} />
      </div>
      <h3>{shirts.club}</h3>
      <p>{shirts.description}</p>
      <div className="card-body">
        <img src={edit} title="Edit" alt="Edit icon" />
        <img src={remove} title="Remove" alt="Remove icon" />
      </div>
      <button onClick={() => toast.error("Under development")}>OK</button>
    </div>
  );
};

export default Card;
