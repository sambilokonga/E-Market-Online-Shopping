import { useContext, useState } from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { CartContext } from "../CartContext";
import CartProduct from "./CartProduct";
import Dropdown from "react-bootstrap/Dropdown";

function NavbarComponent() {
  const cart = useContext(CartContext);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
        <Dropdown>
          <Dropdown.Toggle variant="Primary" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Dresses</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Foods</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Houses</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Cars</Dropdown.Item>
            <Dropdown.Item href="#/action-6">
              Construction equipment
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
            More
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Fresh FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Terms & Condition</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
        </Navbar.Collapse>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Signup/Login
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/signup">Signup</Dropdown.Item>
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="#">Profile</Dropdown.Item>
            <Dropdown.Item href="#">Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shoping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ? (
            <>
              <p>Item in your cart:</p>
              {cart.items.map((currentProduct, idx) => (
                <CartProduct
                  key={idx}
                  id={currentProduct.id}
                  quantity={currentProduct.quantity}
                ></CartProduct>
              ))}
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant="success">Purchase Items!</Button>
            </>
          ) : (
            <h1>There are no items in your cart</h1>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarComponent;
