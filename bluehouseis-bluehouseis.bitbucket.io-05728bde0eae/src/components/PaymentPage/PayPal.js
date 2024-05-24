import React, {useState, useEffect, useRef} from "react";

export default function PayPal({price}) {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  // To show PayPal buttons once the component loads
    useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "EUR",
                  value: price,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log(order);
        },
        onError: (err) => {
            setError(err);
            console.error(err);
        },
      })
      .render(paypalRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (paid) {
    return <div>Payment successful.!</div>;
  }

  if (error) {
    return <div>Error Occurred in processing payment.! Please try again.</div>;
  }

  return (
    <div>
      <h4>Total Amount in Euro : {price} </h4>
      <div ref={paypalRef} />
    </div>
  );
}