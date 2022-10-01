import {
  Elements,
  CardElement,
  PaymentElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const [errormsg, seterror] = useState({});
  const [paid, setpaid] = useState(false);
  const [err, seterr] = useState(false);
  const elements = useElements();
  const handleSubmit = (stripe: any, elements: any) => async () => {
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      seterror(error);
      seterr(!err);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setpaid(!paid);
      seterr(false);
      // ... POST: /api/charge/user
    }
  };
  return (
    <>
      <h4>Pay via Card </h4>
      <div className="form-control">
        <CardElement />
      </div>
      <Button
        onClick={handleSubmit(stripe, elements)}
        className="w-25 d-flex justify-content-center align-self-center my-4 btn-dark btn-lg"
      >
        Buy
      </Button>
      {errormsg && err ? (
        <div className="text-danger">
          <FaExclamationTriangle /> {errormsg.message}
        </div>
      ) : null}
      {paid ? (
        <div className="text-success">
          <FaCheckCircle /> Payment Successfull!
        </div>
      ) : null}
    </>
  );
};
