import React from "react";
import styled from "styled-components/native";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";

import { RestaurantsInfoCard } from "../components/restaurant-info-card.components";

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;

export const RestaurantsScreen = () => {
  return (
    <StyledSafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantsInfoCard />
      </RestaurantListContainer>
    </StyledSafeArea>
  );
};
