import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import colors from "../config/colors";

function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/pexels-adrien-olichon-3137064.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/DigiBay2.png")} />
        <Text style={styles.welcomeText}>Trading Digital Art Aseets</Text>
      </View>
      <TouchableOpacity
        style={styles.loginButton}
        onPressOut={() => navigation.navigate("ViewImageScreen")}
      >
        <Text style={styles.welcomeText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPressOut={() => navigation.navigate("ViewImageScreen")}
      >
        <Text style={styles.welcomeText}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#0008",
    borderRadius: 2,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: colors.seondary,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    color: colors.white,
    fontSize: 20,
  },
});
export default WelcomeScreen;
