import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const cartLength = cartItems.length;

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartLength ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      {cartLength ? (
        <Link to="/checkout">
          <Button>GO TO CHECKOUT</Button>
        </Link>
      ) : null}
    </div>
  );
};

export default CartDropdown;
