import React, { useState, useContext } from "react";
import { List, Divider } from "react-native-paper";
import { ScrollView } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { OrderButton } from "../components/restaurant-list.styles";

import { CartContext } from "../../../services/cart/cart.context";

import { colors } from "../../../infrastructure/theme/colors";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLauncherExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinkExpanded, setDrinkExpanded] = useState(false);

  const { addToCart } = useContext(CartContext);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantsInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.brand.primary}
              icon="bread-slice"
            />
          )}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.brand.primary}
              icon="hamburger"
            />
          )}
          expanded={lunchExpanded}
          onPress={() => setLauncherExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon
              {...props}
              color={colors.brand.primary}
              icon="food-variant"
            />
          )}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drink"
          titleStyle={{ color: colors.brand.primary }}
          left={(props) => (
            <List.Icon {...props} color={colors.brand.primary} icon="cup" />
          )}
          expanded={drinkExpanded}
          onPress={() => setDrinkExpanded(!drinkExpanded)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash-usd"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1499 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 14.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
