import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Dimensions,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <WelcomeScreen />;
}

// npx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --web
