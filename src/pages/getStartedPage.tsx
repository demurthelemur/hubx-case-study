import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";

interface Props {
  navigation: any;
}

const GettingStartedPage: React.FC<Props> = ({ navigation }) => {
  function buttonClicked() {
    navigation.navigate("OnboardingPages");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to <Text style={styles.boldText}>PlantApp</Text>
      </Text>
      <Text style={styles.secondaryText}>
        Identify more than 3000+ plants and {"\n"}88% accuracy.
      </Text>
      <Image
        style={styles.image}
        source={require("../assets/getStartedImage.png")}
      />
      <View style={styles.buttonContainer}>
        <BasicButton title="Get Started" onPress={buttonClicked} />
      </View>
      <View style={styles.privacyPolicyContainer}>
        <Text style={styles.altText}>
          By tapping next you are agreeing to plantID{"\n"}
          <Text style={styles.underlineText}>Terms of Use </Text> &
          <Text style={styles.underlineText}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingTop: 47,
    paddingBottom: 34,
  },
  image: {
    alignSelf: "center",
    width: "100%",
    marginTop: 24,
    objectFit: "fill",
  },
  title: {
    fontSize: 28,
    marginTop: 12,
    marginHorizontal: 24,
    fontFamily: "Rubik-Regular",
  },
  boldText: {
    fontWeight: "800",
  },
  secondaryText: {
    fontSize: 16,
    marginHorizontal: 24,
    color: "rgba(19, 35, 27, 0.7)",
  },
  altText: {
    textAlign: "center",
    fontSize: 11,
    color: "#597165",
  },
  privacyPolicyContainer: {
    alignSelf: "center",
    width: "100%",
    marginTop: "3%",
  },
  underlineText: {
    textDecorationLine: "underline",
  },
  buttonContainer: {
    alignSelf: "center",
    paddingHorizontal: 24,
    width: "100%",
    marginTop: -44,
  },
});

export default GettingStartedPage;
