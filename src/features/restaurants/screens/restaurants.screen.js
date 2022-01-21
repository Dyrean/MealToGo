import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Loading } from "../../../components/loading/loading.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { Search } from "../components/search.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading ? (
        <Loading size={50} />
      ) : (
        <>
          <Search />
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <Spacer position="bottom" size="large">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("RestaurantDetail", {
                        restaurant: item,
                      })
                    }
                  >
                    <RestaurantsInfoCard restaurant={item} />
                  </TouchableOpacity>
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
