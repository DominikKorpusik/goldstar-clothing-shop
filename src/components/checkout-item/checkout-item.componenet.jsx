import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const DEFAULT_VALUES = {
  increase: true,
  decrease: false,
};

export const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { increase, decrease } = DEFAULT_VALUES;
  const { updateItemInCart, removeItemFromCart } = useContext(CartContext);

  const changeQuantity = (type) => {
    switch (type) {
      case true:
        updateItemInCart(cartItem, type);
        break;
      case false:
        updateItemInCart(cartItem, type);
        break;
      default:
        break;
    }
  };

  const removeItemHandler = () => removeItemFromCart(cartItem);

  const isDisabled = cartItem.quantity === 1 ? true : false;

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <button
          className="arrow"
          disabled={isDisabled}
          onClick={() => changeQuantity(decrease)}
        >
          &#10094;
        </button>
        <span className="value">{quantity}</span>
        <button className="arrow" onClick={() => changeQuantity(increase)}>
          &#10095;
        </button>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
