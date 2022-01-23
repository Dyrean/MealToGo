import React, { useState, useContext, useEffect } from "react";
import { TextInput } from "react-native-paper";

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
  RememberBox,
} from "../components/account.styles";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  const [showPassword, setShowPassword] = useState(true);
  const [passwordIcon, setPasswordIcon] = useState("eye");

  useEffect(() => {
    setPasswordIcon(showPassword ? "eye-off" : "eye");
  }, [showPassword]);

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
          left={<TextInput.Icon name="close" onPress={() => setEmail("")} />}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry={showPassword}
            onChangeText={(p) => setPassword(p)}
            left={
              <TextInput.Icon name="close" onPress={() => setPassword("")} />
            }
            right={
              <TextInput.Icon
                name={passwordIcon}
                onPress={() => setShowPassword(!showPassword)}
              />
            }
          />
        </Spacer>
        <RememberBox
          label="Remember Me?"
          status={rememberMe ? "checked" : "unchecked"}
          onPress={(c) => {
            setRememberMe(!rememberMe);
          }}
        />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error.message}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <AuthButton
            icon="login-variant"
            mode="contained"
            disabled={isLoading}
            loading={isLoading}
            onPress={() => onLogin(email, password, rememberMe)}
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
