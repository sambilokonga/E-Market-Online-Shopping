import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";
import Fade from "react-reveal/Fade";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.items);

  return (
    <Fade bottom cascade>
      <Card>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Title>{product.price}</Card.Title>
          <Card.Img src={product.imgUrl}></Card.Img>
          {productQuantity > 0 ? (
            <>
              <Form as={Row}>
                <Form.Label column="true" sm="6">
                  In Cart: {productQuantity}
                </Form.Label>
                <Col sm={6}>
                  <Button
                    sm="6"
                    className="mx-2"
                    variant="success"
                    onClick={() => cart.addOneToCart(product.id)}
                  >
                    +
                  </Button>
                  <Button
                    sm="6"
                    className="mx-2"
                    variant="warning"
                    onClick={() => cart.removeOneFromCart(product.id)}
                  >
                    -
                  </Button>
                </Col>
              </Form>
              <Button
                variant="danger"
                className="my-2"
                onClick={() => cart.deleteFromCart(product.id)}
              >
                Remove From Cart
              </Button>
            </>
          ) : (
            <Button
              variant="primary"
              onClick={() => cart.addOneToCart(product.id)}
            >
              Add To Cart
            </Button>
          )}
        </Card.Body>
      </Card>
    </Fade>
  );
}

export default ProductCard;
