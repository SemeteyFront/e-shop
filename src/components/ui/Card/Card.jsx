import "./Card.css";

function Card({ image, title, caption, price, sale, isNew }) {
  return (
    <div className="card">
      {sale && <div className="cardLabel">{sale}%</div>}
      {isNew && <div className="cardLabel cardLabelNew">New</div>}
      <img src={image} alt="dress" />
      <p className="hint">{caption}</p>
      <h3 className="cardTitle caption-1">{title}</h3>
      <span className="cardPrice">{price}$</span>
    </div>
  );
}

export default Card;
