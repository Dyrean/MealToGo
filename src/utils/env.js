import { Platform } from "react-native";

const localHost = "http://localhost:5001/mealstogo-97791/us-central1";
const liveHost = "";

export const isAndroid = Platform.OS === "android";
export const isDevopment = process.env.NODE_ENV === "development";
export const isMock = true;
export const host = !isDevopment || isAndroid ? liveHost : localHost;
