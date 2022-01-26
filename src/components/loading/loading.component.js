import React from "react";
import styled from "styled-components/native";

import LottieView from "lottie-react-native";

import { SafeArea } from "../utility/safe-area.component";
import { Text } from "../typography/text.component";

const LoadingContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const Loading = () => {
  return (
    <SafeArea>
      <LoadingContainer>
        <LottieView
          key="animation"
          autoPlay
          loop
          resizeMode="cover"
          source={require("../../../assets/loading-animation.json")}
        />
        <Text variant="label">Loading</Text>
      </LoadingContainer>
    </SafeArea>
  );
};
