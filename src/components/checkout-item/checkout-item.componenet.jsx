import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow disabled={isDisabled} onClick={() => changeQuantity(decrease)}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => changeQuantity(increase)}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan>{price}</BaseSpan>
      <RemoveButton onClick={removeItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
