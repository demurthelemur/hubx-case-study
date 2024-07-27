import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";
import PageIndicator from "../components/pageIndicator";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
}

const OnboardingPageTwo: React.FC<Props> = ({ navigation }) => {
  function buttonClicked() {
    navigation.navigate("PaywallPage");
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
        blurRadius={25}
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
    display: "flex",
    alignItems: "center",
  },
  title: { width: 277, height: 49, marginTop: 59, marginBottom: 70 },
  image: { height: 524, width: 242, marginBottom: "30%", objectFit: "fill" },
  buttonContainer: {
    position: "absolute",
    top: "85%", // Adjust as needed
    alignItems: "center",
    width: "85%",
    zIndex: 2,
  },
  pageContainer: { marginTop: 15 },
  gradient: {
    zIndex: 1,
    position: "absolute",
    top: "55%",
    alignSelf: "center",
    width: "85%",
    height: 540,
  },
  background: {
    position: "absolute",
    top: "25%",
    height: 411,
    width: 420,
    transform: [{ rotate: "73.6deg" }],
  },
  artwork: {
    position: "absolute",
    top: "14%",
  },
});

export default OnboardingPageTwo;
