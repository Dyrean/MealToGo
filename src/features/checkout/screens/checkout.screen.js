import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { CartContext } from "../../../services/cart/cart.context";

import {
  CardIconContainer,
  CardIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles.js";

import { payRequest } from "../../../services/checkout/checkout.service";

export const CheckoutScreen = () => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);

  const onPay = () => {
    if (!card || !card.id) {
      // TODO: error handling
      return;
    }
    payRequest(card.id, sum, name);
  };

  if (!cart.length || !restaurant) {
    return (
      <SafeArea>
        <CardIconContainer>
          <CardIcon icon="cart-off" />
          <Text>Your cart is empty</Text>
        </CardIconContainer>
      </SafeArea>
    );
  }
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <Spacer position="left" size="midium">
          <Spacer position="top" size="large">
            <Text>Your Order</Text>
          </Spacer>
          <List.Section>
            {cart.map(({ item, price }) => {
              return <List.Item title={`${item} - ${price / 100}`} />;
            })}
          </List.Section>
          <Text>Total: {sum / 100}</Text>
        </Spacer>
        <NameInput
          label="Cardholder Name"
          mode="outlined"
          value={name}
          onChange={(t) => {
            setName(t);
          }}
        />
        <Spacer position="top" size="large">
          {name.length > 0 && (
            <CreditCardInput name={name} onSuccess={setCard} />
          )}
        </Spacer>
        <Spacer position="top" size="xxl" />
        <PayButton icon="cash-usd" mode="contained" onPress={onPay}>
          Pay
        </PayButton>
        <Spacer position="top" size="large" />
        <ClearButton icon="cart-off" mode="contained" onPress={clearCart}>
          Clear Cart
        </ClearButton>
      </ScrollView>
    </SafeArea>
  );
};
