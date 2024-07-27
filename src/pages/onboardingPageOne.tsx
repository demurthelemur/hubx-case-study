import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";
import PageIndicator from "../components/pageIndicator";

interface Props {
  navigation: any;
}

const OnboardingPageOne: React.FC<Props> = ({ navigation }) => {
  function buttonClicked() {
    navigation.navigate("OnboardingPageTwo");
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
        <View style={styles.indicatorContainer}>
          <PageIndicator currentPage={0} totalPages={3}></PageIndicator>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
  },
  title: { width: 315, height: 66, marginTop: 49, marginBottom: 12 },
  image: { height: 630 },
  buttonContainer: {
    position: "absolute",
    top: "85%",
    alignItems: "center",
    width: "85%",
    zIndex: 2,
  },
  indicatorContainer: { marginTop: 10 },
});

export default OnboardingPageOne;
