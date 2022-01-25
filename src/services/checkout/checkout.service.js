import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51KLsbtBJOJMHrtElOm8kxDLC7prNR09FZOg8A7dOZyFp8zDuXrhGBA6ZZ0MB29uJjc6NxTUVIptXRs4ryHTLO7BB00EHBdBbS5"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
