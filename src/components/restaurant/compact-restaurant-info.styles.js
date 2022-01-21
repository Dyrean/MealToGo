import styled from "styled-components/native";
import WebView from "react-native-webview";

export const CompactImage = styled.Image`
  border-radius: ${(props) => props.theme.space[3]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const CompactWebview = styled(WebView)`
  border-radius: ${(props) => props.theme.space[3]};
  width: ${(props) => props.theme.sizes[4]};
  height: ${(props) => props.theme.sizes[4]};
`;

export const Item = styled.View`
  padding: ${(props) => props.theme.space[3]};
  max-width: ${(props) => props.theme.sizes[4]};
  align-items: center;
`;
