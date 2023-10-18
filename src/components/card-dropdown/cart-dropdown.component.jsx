import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <span className="empty-message">Your cart is empty</span>
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
