import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { Dimensions } from "react-native";

const widthInput = (Dimensions.get("window").width / 100) * 75;

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.primary};
  opacity: 0.4;
`;

export const AccountContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  opacity: 0.9;
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput).attrs({
  mode: "outlined",
  autoCapitalize: "none",
})`
  width: ${widthInput}px;
`;

export const Title = styled(Text)`
  font-size: ${(props) => props.theme.fontSizes.h4};
`;

export const ErrorContainer = styled.View`
  max-width: ${widthInput}px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
