import React from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  Pressable,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MotiView } from "moti";
import { useFonts } from "expo-font";
import genie from "../assets/genie.png";
import { NavigationProp } from "@react-navigation/native";
import Intro from "./components/intro";

const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
  useFonts({
    Queensides: require("../assets/QueensidesMedium-x30zV.ttf"),
  });

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4333bd", "#7767f0", "#bfb8f5"]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
      >
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 1500 }}
        >
          <View style={{ zIndex: 10 }}>
            <Text
              style={{
                fontSize: 45,
                fontFamily: "Queensides",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              GenieBox
            </Text>
            <Image
              source={genie}
              style={{
                width: 300,
                height: 300,
                borderRadius: 200,
                marginBottom: 20,
                marginLeft: "auto",
                marginRight: "auto",
                zIndex: 2,
              }}
            />
            <Pressable
              onPress={() => navigation.navigate("Message")}
              style={styles.button}
            >
              <Text style={styles.text}>Play</Text>
            </Pressable>
          </View>
        </MotiView>
        <StatusBar />
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    borderRadius: 100,
    backgroundColor: "white",
    width: 200,
    height: 70,
    marginLeft: "auto",
    marginRight: "auto",
    elevation: 3,
    zIndex: 3,
  },
  text: {
    fontSize: 24,
    fontFamily: "Queensides",
    textAlign: "center",
    lineHeight: 60,
  },
  oval: {
    width: 120,
    height: 420,
    borderRadius: 60,
    backgroundColor: "#4333bd",
    transform: [{ scaleX: 4 }],
    position: "absolute",
    bottom: -210, // Half the height to center the visible portion
    opacity: 0.25,
    elevation: 1,
    zIndex: -1,
  },
  shape_container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    alignItems: "center",
    height: "50%",
    elevation: 1,
    zIndex: -1,
  },
});

export default Home;
