import "./style.css";


const Card = ({shirts}) => {
  return (
    <div className="card-conteiner">
      <div>
          <p>{`R$${shirts.price.toFixed(2)}`}</p>
              <img src={shirts.img} alt={`Shirt of ${shirts.club}`} />
      </div>
      <h3>{shirts.club}</h3>
      <p>{shirts.description}</p>
      <button onClick={() => ("Under development")}>OK</button>
    </div>
  );
};

export default Card;
