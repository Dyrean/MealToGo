import React from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = ({
  size,
  color = `${(props) => props.theme.colors.bg.seconday}`,
}) => {
  return (
    <LoadingContainer>
      <ActivityIndicator size={size} color={color} animation={true} />
    </LoadingContainer>
  );
};
