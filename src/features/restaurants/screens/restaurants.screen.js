import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";

import { FadeInView } from "../../../components/animations/fade.animation";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { FavouritesBar } from "../../../components/favourite/favourites-bar.component";
import { Loading } from "../../../components/loading/loading.component";
import { Error } from "../../../components/error/error.component";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";

import { RestaurantList } from "../components/restaurant-list.styles";

export const RestaurantsScreen = ({ navigation }) => {
  const { error: locationError } = useContext(LocationContext);
  const { isLoading, restaurants, error } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  const hasError = !!error || !!locationError;

  return (
    <SafeArea>
      {isLoading ? (
        <Loading size={50} />
      ) : (
        <>
          <Search
            isFavouritesToggled={isToggled}
            onFavouritesToggle={() => setIsToggled(!isToggled)}
          />
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          )}
          {hasError && (
            <Error locationError={locationError} restaurantsError={error} />
          )}
          {!hasError && (
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
                      <FadeInView>
                        <RestaurantsInfoCard restaurant={item} />
                      </FadeInView>
                    </TouchableOpacity>
                  </Spacer>
                );
              }}
              keyExtractor={(item) => item.name}
            />
          )}
        </>
      )}
    </SafeArea>
  );
};
