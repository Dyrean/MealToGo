import React, { useContext, useCallback, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { colors } from "../../../infrastructure/theme/colors";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.9);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <Spacer position="top" size="large" />
          <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
            {!photo ? (
              <Avatar.Icon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            ) : (
              <Avatar.Image
                size={180}
                source={{ uri: photo }}
                backgroundColor="tomato"
              />
            )}
          </TouchableOpacity>
          <Spacer position="top" size="large" />
          <Text style={{ color: colors.brand.primary }} variant="label">
            {user.email}
          </Text>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color={colors.ui.error} icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <Spacer />
          <SettingsItem
            title="Logout"
            left={(props) => (
              <List.Icon
                {...props}
                color={colors.brand.secondary}
                icon="logout-variant"
              />
            )}
            onPress={onLogOut}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
