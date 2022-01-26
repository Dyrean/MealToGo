import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { CreditCardInput } from "../components/credit-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { Loading } from "../../../components/loading/loading.component";
import { CartContext } from "../../../services/cart/cart.context";

import {
  CardIconContainer,
  CardIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "../components/checkout.styles.js";

import { payRequest } from "../../../services/checkout/checkout.service";
import { isLocalMock } from "../../../utils/env";

export const CheckoutScreen = ({ navigation }) => {
  const { cart, restaurant, sum, clearCart } = useContext(CartContext);
  const [name, setName] = useState("");
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onPay = () => {
    setIsLoading(true);
    if (!card || !card.id) {
      setIsLoading(false);
      navigation.navigate("CheckoutError", {
        error: "Please fill in a valid credit card",
      });
      return;
    }
    payRequest(card.id, sum, name)
      .then((result) => {
        setIsLoading(false);
        clearCart();
        navigation.navigate("CheckoutSuccess");
      })
      .catch((err) => {
        setIsLoading(false);
        navigation.navigate("CheckoutError", {
          error: err,
        });
      });
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
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <Spacer position="left" size="midium">
            <Spacer position="top" size="large">
              <Text>Your Order</Text>
            </Spacer>
            <List.Section>
              {cart.map(({ item, price }) => {
                return (
                  <List.Item
                    key={`${item}-${cart.length}-${Math.ceil(
                      Math.random() * (cart.length + 5)
                    )}`}
                    title={`${item} - ${price / 100}`}
                  />
                );
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
          <Spacer position="top" size="large" />
          {name.length > 0 && (
            <CreditCardInput
              name={name}
              onSuccess={setCard}
              onError={() => {
                navigation.navigate("CheckoutError", {
                  error: "Something went wrong processing your credit card",
                });
              }}
            />
          )}
          <Spacer position="top" size="large" />
          <PayButton
            disabled={isLoading}
            icon="cash-usd"
            mode="contained"
            onPress={isLocalMock ? null : onPay}
          >
            Pay
          </PayButton>
          <Spacer position="top" size="large" />
          <ClearButton
            disabled={isLoading}
            icon="cart-off"
            mode="contained"
            onPress={clearCart}
          >
            Clear Cart
          </ClearButton>
        </ScrollView>
      )}
    </SafeArea>
  );
};
