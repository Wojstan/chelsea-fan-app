import React, { useEffect, useRef } from "react";

export default function PayPal({ payment, arena }) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Tickets order",
                amount: {
                  currency_code: "PLN",
                  value: payment,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log("Scucces", order);
          /*
          console.log(
            arena.map((row) =>
              row.seats.map((seat) =>
                seat.id === newSeat.id && row.name === newSeat.name
                  ? (seat.status = 1)
                  : seat.status
              )
            )
          );
          */
        },
        onError: (err) => console.log(err),
      })
      .render(paypal.current);
  }, [payment]);

  return <div ref={paypal}></div>;
}
