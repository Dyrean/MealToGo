module.exports.payRequest = (request, response, stripe) => {
  const body = JSON.parse(request.body);
  const { token, amount } = body;
  stripe.paymentIntents
    .create({
      amount,
      currency: "USD",
      payment_method_types: ["card"],
      payment_method_data: {
        type: "card",
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then((paymentIntent) => {
      response.json(paymentIntent);
    })
    .catch((err) => {
      console.log(err);
      response.status(400);
      response.send(err);
    });
};
