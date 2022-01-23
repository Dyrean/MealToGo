import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

import { FadeInView } from "../../../components/animations/fade.animation";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsInfoCard } from "../../restaurants/components/restaurant-info-card.component";
import { Text } from "../../../components/typography/text.component";
import { RestaurantList } from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? (
    <SafeArea style={{ marginTop: -10 }}>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <Spacer position="top" size="large">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant: item,
                  })
                }
              >
                <FadeInView>
                  <RestaurantsInfoCard restaurant={item} />
                </FadeInView>
              </TouchableOpacity>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea style={{ marginTop: -10 }}>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
