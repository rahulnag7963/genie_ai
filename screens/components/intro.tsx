import { MotiView } from "moti";
import React from "react";
import { Text, Image, StyleSheet } from "react-native";
import Logo from "../../assets/logo.png";
import { useFonts } from "expo-font";
const Intro: React.FC = () => {
  useFonts({
    Ostrich: require("../../assets/OstrichSansInline-Regular.otf"),
  });
  return (
    <MotiView
      from={styles.before}
      animate={{ opacity: 0, zIndex: -1 }}
      transition={{ type: "timing", duration: 3000 }}
      style={styles.container}
    >
      <Text
        style={{
          position: "relative",
          marginTop: 250,
          fontSize: 45,
          textAlign: "center",
          marginBottom: -200,
          fontFamily: "Ostrich",
        }}
      >
        TransMigrate
      </Text>
      <MotiView
        from={{ rotate: "0deg" }}
        animate={{ rotate: "-135deg" }}
        transition={{ type: "timing", duration: 1000 }}
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Image
          source={Logo}
          style={{
            width: 300,
            height: 300,
            zIndex: 2,
          }}
        ></Image>
      </MotiView>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  before: { opacity: 1, zIndex: 3, elevation: 3 },
  after: { opacity: 0, zIndex: -3, elevation: -3 },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default Intro;
