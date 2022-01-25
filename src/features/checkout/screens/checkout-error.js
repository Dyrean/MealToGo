import React from "react";
import styled from "styled-components/native";

import LottieView from "lottie-react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const ErrorContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const CheckoutErrorScreen = ({ route }) => {
  const { error = "" } = route.params;
  return (
    <SafeArea>
      <ErrorContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/checkout-error.json")}
        />
        <Text variant="error">{error}</Text>
      </ErrorContainer>
    </SafeArea>
  );
};
