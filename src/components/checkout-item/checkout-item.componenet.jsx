import "./checkout-item.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const DEFAULT_VALUES = {
  increase: true,
  decrease: false,
};

export const CheckoutItem = ({ cartItem }) => {
  const { id, imageUrl, name, price, quantity } = cartItem;
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

  const removeItem = () => {
    removeItemFromCart(cartItem);
  };

  const isDisabled = cartItem.quantity === 1 ? true : false;

  return (
    <tr key={id}>
      <td>
        <img src={imageUrl} alt={`${name}`} />
      </td>
      <td>{name}</td>
      <td>
        <button onClick={() => changeQuantity(decrease)} disabled={isDisabled}>
          -
        </button>
        {quantity}
        <button onClick={() => changeQuantity(increase)}>+</button>
      </td>
      <td>{price}</td>
      <td>
        <button onClick={removeItem}>Remove</button>
      </td>
    </tr>
  );
};

export default CheckoutItem;
