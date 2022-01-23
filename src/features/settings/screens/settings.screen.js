import React from "react";
import { Text } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Button } from "react-native-paper";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
export const SettingsScreen = ({ navigation }) => {
  const { onLogOut } = React.useContext(AuthenticationContext);
  const onPressButton = () => {
    onLogOut();
    navigation.goBack();
  };
  return (
    <SafeArea>
      <Text>Setting Screen</Text>
      <Button icon="camera" mode="contained" onPress={onPressButton}>
        Log Out
      </Button>
    </SafeArea>
  );
};
