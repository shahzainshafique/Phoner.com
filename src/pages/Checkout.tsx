import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItems } from "../components/CartItems";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import storeItems from "../data/items.json";
import "./checkout.css";
import { FaStripeS } from "react-icons/fa";
import { CheckoutForm } from "./CheckoutForm";
const Checkout = () => {
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(
    "pk_test_51Lo55KA6jeHPYnCdECWAaBFiYCz4ccWPXnz2WsmpXKFGg0eRYwQMdL7zLTQ8GIaGCmdM0ifL8t9cU0I0Cs92LNnI00dnwiToTv"
  );
  const { closeCart, cartItems } = useShoppingCart();

  const price = formatCurrency(
    cartItems.reduce((total, cartItems) => {
      const item = storeItems.find((i) => i.id === cartItems.id);
      return total + (item?.price || 0) * cartItems.quantity;
    }, 0)
  );
  console.log(price.toString());
  const options = {
    // passing the client secret obtained from the server
    clientSecret:
      "pi_1Dse262eZvKYlo2CNAdNOxmG_secret_NZZIsaijpKLMNobPMGOZa0D8W",
  };
  return (
    <div className="d-flex flex-row flex-wrap w-full maincont">
      <div className="d-flex flex-column w-50 mx-5 justify-content-flex-start">
        <h3 className="mt-5">Please enter your details</h3>
        <div
          className={`d-flex flex-column justify-content-flex-start flex-wrap mb-4`}
        >
          <label htmlFor="usr" className="py-2">
            Full Name
          </label>
          <input type="text" className="form-control w-100" id="usr" />
          <label htmlFor="usr" className="py-2">
            Phone
          </label>
          <input type="number" className="form-control w-100 " id="usr" />
          <label htmlFor="usr" className="py-2">
            Email Address
          </label>
          <input type="email" className="form-control w-100" id="usr" />
          <div className="d-flex justify-content-center">
            <Button className="w-25 d-flex justify-content-center align-self-center my-4 btn-dark butt">
              Save
            </Button>
          </div>
        </div>
        <PayPalScriptProvider
          options={{
            "client-id":
              "Aab3VXxObyy-1h5eofdCl1pFXnFyD73n_T6iizI4iJ7-aZWBd6MfHK2VIRGXjtsiClLymUUICDu0Lh9J",
          }}
        >
          <PayPalButtons
            style={{ layout: "horizontal" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: price.toString(),
                    },
                  },
                ],
              });
            }}
          />
        </PayPalScriptProvider>
        <hr />
        <label className="align-self-center"> OR </label>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
        {/* <Button className="w-50 d-flex justify-content-center align-self-center my-4 btn-seconday btn-lg">
          <a href="https://buy.stripe.com/test_aEUg0h6kQbGo0NOdQQ">
            <FaStripeS />
            Stripe
          </a>
        </Button> */}
      </div>
      <div className="d-flex flex-column flex-wrap mx-3 justify-content-space-between">
        <h4 className="my-5">Your Items in cart!</h4>
        <Stack gap={3} className="items">
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
        </Stack>
      </div>
    </div>
  );
};

export default Checkout;
