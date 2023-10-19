import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.componenet";

const TABLE_HEAD_NAMES = [
  "Product",
  "Description",
  "Quantity",
  "Price",
  "Remove",
];

export const CheckoutTable = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.length ? (
        <table>
          <thead>
            <tr>
              {TABLE_HEAD_NAMES.map((name, index) => (
                <th key={index}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((cartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <h2>Your cart is empty </h2>
          <span>Go to shop</span>
        </div>
      )}
    </div>
  );
};

export default CheckoutTable;
