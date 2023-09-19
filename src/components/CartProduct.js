import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductStore";
import Fade from "react-reveal/Fade";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <Fade left cascade>
        <h3>{productData.title}</h3>
        <img src={productData.imgUrl} height="200px" alt="" />
        <p>{quantity} total</p>
        <p>${(quantity * productData.price).toFixed(2)}</p>
        <Button size="sm" onClick={() => cart.deleteFromCart(id)}>
          Remove
        </Button>
        <hr></hr>
      </Fade>
    </>
  );
}

export default CartProduct;
