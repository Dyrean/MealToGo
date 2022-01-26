import React from "react";
import styled from "styled-components/native";

import LottieView from "lottie-react-native";

import { SafeArea } from "../utility/safe-area.component";
import { Text } from "../typography/text.component";

const ErrorContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const Error = ({ locationError, restaurantsError }) => {
  return (
    <SafeArea>
      <ErrorContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/error-animation.json")}
        />
        <Text variant="error">{JSON.stringify(locationError)}</Text>
        <Text variant="error">{JSON.stringify(restaurantsError)}</Text>
      </ErrorContainer>
    </SafeArea>
  );
};
