import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItems } from "./CartItems";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItems) => {
                const item = storeItems.find((i) => i.id === cartItems.id);
                return total + (item?.price || 0) * cartItems.quantity;
              }, 0)
            )}
          </div>
          <div className="d-flex justify-content-center mt-3">
            <Button className="w-75 btn-dark">
              <a
                href="/checkout"
                style={{ textDecoration: "none", color: "white" }}
              >
                Proceed to Checkout!
              </a>
            </Button>
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
