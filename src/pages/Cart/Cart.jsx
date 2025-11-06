import React from "react";
import { Header, Footer } from "../../components";
import "../Keyboards/Keyboards.css";
import "./Cart.css";
import { useCart } from "../../Context/CartContext.jsx";
import { useNavigate } from "react-router-dom"; // якщо ти використовуєш react-router

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Оплата успішна 💳");
    clearCart();
  };

  return (
    <>
      <Header />
      <div className="cart-page">
        <h2 className="cart-title">Ваш кошик</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Кошик порожній 🛍️</p>
            <button className="back-btn" onClick={() => navigate("/buy")}>
              Повернутись до покупок
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.img} alt={item.title} />
                  <div className="cart-item-info">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Видалити
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-actions">
              <button className="clear-btn" onClick={clearCart}>
                Очистити кошик
              </button>
              <button className="pay-btn" onClick={handlePayment}>
                Оплатити 💳
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
