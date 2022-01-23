import React from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = React.useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Spacer position="top" size="large" />
        <Avatar.Icon size={180} icon="human" backgroundColor="tomato" />
        <Spacer position="top" size="large" />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color="black" icon="logout-variant" />
          )}
          onPress={onLogOut}
        />
      </List.Section>
    </SafeArea>
  );
};
