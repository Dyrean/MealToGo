import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { initializeApp, getApps, getApp } from "firebase/app";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";

const firebaseConfig = {
  apiKey: "AIzaSyDkF_4lDzhbetZ2T1BvBVRu-TRgPOWsMx8",
  authDomain: "mealstogo-97791.firebaseapp.com",
  projectId: "mealstogo-97791",
  storageBucket: "mealstogo-97791.appspot.com",
  messagingSenderId: "22808473735",
  appId: "1:22808473735:web:f1989063bfa6ba54910822",
};

getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
