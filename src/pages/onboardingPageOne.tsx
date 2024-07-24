import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";
import PageIndicator from "../components/pageIndicator";

interface Props {
  // Define your component's props here
}

const OnboardingPageOne: React.FC<Props> = ({}) => {
  function buttonClicked() {
    console.log("Button Pressed");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/onboarding1Title.png")}
        style={styles.title}
      />
      <Image
        source={require("../assets/onboarding1.png")}
        style={styles.image}
      />
      <View style={styles.buttonContainer}>
        <BasicButton title="Continue" onPress={buttonClicked} />
        <PageIndicator currentPage={0} totalPages={3}></PageIndicator>
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
  title: { width: 315, height: 66, marginTop: 59 },
  image: { height: 630 },
  buttonContainer: {
    position: "absolute",
    top: "85%", // Adjust as needed
    left: "25%", // Adjust as needed
    transform: [{ translateX: -50 }, { translateY: -50 }], // Center the button
    zIndex: 1,
  },
});

export default OnboardingPageOne;
