import React from "react";
import styled from "styled-components/native";

import LottieView from "lottie-react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";

const SuccessContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const CheckoutSuccessScren = () => {
  return (
    <SafeArea>
      <SuccessContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../../assets/checkout-success.json")}
        />
        <Text variant="label">Success!</Text>
      </SuccessContainer>
    </SafeArea>
  );
};
