import { Card, Button } from "react-bootstrap";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { useState } from "react";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export function StoreItem({ id, name, price, img }: StoreItemProps) {
  const [wish, setwish] = useState(true);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);

  return (
    <Card className="h1-100">
      <Card.Img
        variant="top"
        src={img}
        height="200px"
        style={{ objectFit: "cover" }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title
          className="d-flex 
        justify-content-space-between 
        align-items-baseline mb-4"
        >
          <span className="">{name}</span>
          <span className="ms-2 fs-6 text-muted">{formatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
          {quantity === 0 ? (
            <div>
              <Button
                className="w-75 btn-dark"
                onClick={() => increaseCartQuantity(id)}
              >
                Add To Cart
              </Button>
              <Button
                variant="outline-dark"
                className="w-28  ms-4"
                onClick={() => setwish(!wish)}
              >
                {wish ? <FaRegHeart /> : <FaHeart />}
              </Button>
            </div>
          ) : (
            <div
              className="d-flex align-items-center
            flex-column"
              style={{ gap: ".5rem" }}
            >
              <div
                className="d-flex align-items-center
            justify-content-center"
                style={{ gap: ".5rem" }}
              >
                <Button
                  className="btn-dark"
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </Button>
                <div>
                  <span className="fs-3">{quantity}</span>in Cart
                </div>
                <Button
                  className="btn-dark"
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </Button>
              </div>
              <Button
                variant="danger"
                className="py-2 mt-2 px-4"
                size="sm"
                onClick={() => removeFromCart(id)}
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
