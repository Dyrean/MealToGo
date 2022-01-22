import React, { useState, useContext } from "react";

import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-Mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          onChangeText={(mail) => setEmail(mail)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry={true}
            secure
            onChangeText={(p) => setPassword(p)}
            maxLength={30}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error.message}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="login-variant"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
