import "./total-payment.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

export const TotalPayment = ({ total }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Total</h2>

      <button>Pay</button>
    </div>
  );
};

export default TotalPayment;
