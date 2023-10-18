import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <span className="empty-message">Your cart is empty</span>
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
