import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  Button,
  View,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./StackNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

// npx cross-env NODE_OPTIONS=--openssl-legacy-provider expo start --web
