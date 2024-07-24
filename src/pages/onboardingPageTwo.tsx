import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";
import PageIndicator from "../components/pageIndicator";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  // Define your component's props here
}

const OnboardingPageTwo: React.FC<Props> = ({}) => {
  function buttonClicked() {
    console.log("Button Pressed");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/onboarding2Title.png")}
        style={styles.title}
      />
      <Image
        source={require("../assets/onboarding2Background.png")}
        style={styles.background}
      />
      <Image
        source={require("../assets/onboarding2.png")}
        style={styles.image}
      />
      <Image source={require("../assets/Artwork.png")} style={styles.artwork} />
      <LinearGradient
        colors={["transparent", "white"]}
        style={styles.gradient}
      />
      <View style={styles.buttonContainer}>
        <BasicButton title="Continue" onPress={buttonClicked} />
        <View style={styles.pageContainer}>
          <PageIndicator currentPage={1} totalPages={3}></PageIndicator>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: { width: 277, height: 49, marginTop: 59, marginBottom: 20 },
  image: { height: 540, width: 261, marginBottom: 50 },
  buttonContainer: {
    position: "absolute",
    top: "85%", // Adjust as needed
    left: "22.5%", // Adjust as needed
    transform: [{ translateX: -50 }, { translateY: -50 }], // Center the button
    zIndex: 2,
  },
  pageContainer: { marginTop: 15 },
  gradient: {
    zIndex: 1,
    position: "absolute",
    top: 520,
    left: 75,
    right: 0,
    bottom: 0,
    width: 261,
    height: 540, // Adjust the height of the gradient to your liking
  },
  background: {
    position: "absolute",
    height: 411,
    width: 420,
  },
  artwork: {
    position: "absolute",
    top: 170,
  },
});

export default OnboardingPageTwo;
