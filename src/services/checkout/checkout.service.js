import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51KLsbtBJOJMHrtElOm8kxDLC7prNR09FZOg8A7dOZyFp8zDuXrhGBA6ZZ0MB29uJjc6NxTUVIptXRs4ryHTLO7BB00EHBdBbS5"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("someting went wrong processing your payment");
    }
    return res.json();
  });
};
