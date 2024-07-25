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
      <Image
        style={styles.image}
        source={require("../assets/getStartedImage.png")}
      />
      <BasicButton title="Get Started" onPress={buttonClicked} />
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
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
    height: "100%",
  },
  image: {
    alignSelf: "center",
  },
  title: {
    fontSize: 28,
  },
  boldText: {
    fontWeight: "bold",
  },
  secondaryText: { fontSize: 16 },
  altText: {
    textAlign: "center",
    fontSize: 11,
    color: "#597165",
  },
  privacyPolicyContainer: {
    alignSelf: "center",
    width: "100%",
    marginTop: 20,
  },
  underlineText: {
    textDecorationLine: "underline",
  },
});

export default gettingStartedPage;
