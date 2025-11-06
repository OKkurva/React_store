import "./BuyBox.css";
import { useCart } from "../../Context/CartContext.jsx";

const BuyBox = ({ id, title, icon, desc }) => {
  const { addToCart } = useCart();

  const handleBuy = () => {
    const product = { id, title, img: icon, desc }; // створюємо об’єкт товару
    addToCart(product);
    alert(`✅ ${title} додано у кошик`);
  };

  return (
    <div className="tech-box-s">
      <div className="mini-tech-box">
        <div className="h-mini-box-txt">{title}</div>
        <div className="mini-box-txt">{desc}</div>
        <div className="dev-icon-section">
          <button onClick={handleBuy}>Купити</button>
          <img className="dev-icon" src={icon} width="109px" height="48px" />
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
