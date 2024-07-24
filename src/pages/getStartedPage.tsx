import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";

interface Props {
  // Define your component's props here
}

const gettingStartedPage: React.FC<Props> = ({}) => {
  function buttonClicked() {
    console.log("Button Pressed");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to <Text style={styles.boldText}>PlantApp</Text>
      </Text>
      <Text style={styles.secondaryText}>
        Identify more than 3000+ plants and {"\n"}88% accuracy.
      </Text>
      <Image source={require("../assets/getStartedImage.png")} />
      <View style={styles.buttonContainer}>
        <BasicButton title="Continue" onPress={buttonClicked} />
        <View style={styles.privacyPolicyContainer}>
          <Text style={styles.altText}>
            By tapping next you are agreeing to plantID{"\n"}
            <Text style={styles.underlineText}>Terms of Use </Text> &
            <Text style={styles.underlineText}> Privacy Policy</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 34,
  },
  title: {
    fontSize: 28,
  },
  boldText: {
    fontWeight: "bold",
  },
  secondaryText: { fontSize: 16 },
  buttonContainer: {
    position: "absolute",
    top: "87%", // Adjust as needed
    left: "25%", // Adjust as needed
    transform: [{ translateX: -50 }, { translateY: -50 }], // Center the button
  },
  altText: {
    textAlign: "center",
    fontSize: 11,
    color: "#597165",
  },
  privacyPolicyContainer: {
    marginTop: 10,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});

export default gettingStartedPage;
