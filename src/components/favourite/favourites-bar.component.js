import React from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";

import { FadeInView } from "../animations/fade.animation";
import { Spacer } from "../spacer/spacer.component";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 999;
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper elevation={3}>
      <FadeInView>
        <Spacer variant="left.large">
          <Text variant="caption">Favourites</Text>
        </Spacer>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo
                    isMap={false}
                    restaurant={restaurant}
                  />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FadeInView>
    </FavouritesWrapper>
  );
};
