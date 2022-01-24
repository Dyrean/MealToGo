import React from "react";
import styled from "styled-components/native";

import LottieView from "lottie-react-native";

const LoadingContainer = styled.View`
  flex: 1;
  height: 50%;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.space[3]};
`;

export const Error = () => {
  return (
    <LoadingContainer>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="contain"
        source={require("../../../assets/error-animation.json")}
      />
    </LoadingContainer>
  );
};
