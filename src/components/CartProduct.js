import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import { getProductData } from "../ProductStore";
import Fade from "react-reveal/Fade";
import Stack from "react-bootstrap/Stack";

function CartProduct(props) {
  const cart = useContext(CartContext);
  const id = props.id;
  const quantity = props.quantity;
  const productData = getProductData(id);

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <Fade left cascade>
          <div className="p-2">
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>${(quantity * productData.price).toFixed(2)}</p>
            <Button
              variant="danger"
              size="sm"
              onClick={() => cart.deleteFromCart(id)}
            >
              Remove
            </Button>
          </div>
          <div className="p-2">
            <img src={productData.imgUrl} height="150px" alt="" />
          </div>

          <hr></hr>
        </Fade>
      </Stack>
    </>
  );
}

export default CartProduct;
