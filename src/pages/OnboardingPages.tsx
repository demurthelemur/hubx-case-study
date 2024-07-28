import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import BasicButton from "../components/basicButton";
import PageIndicator from "../components/pageIndicator";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  navigation: any;
}

const OnboardingPageOne: React.FC<Props> = ({ navigation }) => {
  function buttonClicked() {
    if (page === 2) {
      navigation.navigate("PaywallPage");
    } else {
      setValue(2);
    }
  }

  const [page, setValue] = useState(1);

  return (
    <View style={styles.container}>
      {page === 1 && (
        <View>
          <Image
            source={require("../assets/onboarding1Title.png")}
            style={styles.title}
          />
          <View style={styles.imageOne}>
            <Image source={require("../assets/onboarding1.png")} />
          </View>
        </View>
      )}
      {page === 2 && (
        <View>
          <Image
            source={require("../assets/onboarding2Title.png")}
            style={styles.title}
          />
          <View style={styles.imageTwo}>
            <View style={styles.phoneImage}>
              <Image source={require("../assets/onboarding2.png")} />
              <LinearGradient
                colors={["transparent", "white"]}
                style={styles.gradient}
              />
            </View>
            <Image
              source={require("../assets/Artwork.png")}
              style={styles.artworkImage}
            />
            <Image
              source={require("../assets/onboarding2Background.png")}
              style={styles.backgroundImage}
              blurRadius={25}
            />
          </View>
        </View>
      )}
      <View style={styles.buttonContainer}>
        <BasicButton title="Continue" onPress={buttonClicked} />
        <View style={styles.indicatorContainer}>
          <PageIndicator currentPage={page - 1} totalPages={3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 47,
    paddingBottom: 34,
  },
  pages: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    height: "100%",
  },
  buttonContainer: {
    position: "absolute",
    top: "95%",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 24,
    zIndex: 2,
  },
  indicatorContainer: { marginTop: 10 },
  title: {
    marginVertical: 12,
    marginLeft: 24,
  },
  imageOne: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    objectFit: "fill",
  },
  imageTwo: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  phoneImage: {
    position: "relative",
    top: "10%",
    zIndex: 1,
  },
  gradient: {
    zIndex: 1,
    position: "absolute",
    top: "55%",
    alignSelf: "center",
    width: "70%",
    height: 200,
  },
  artworkImage: {
    position: "relative",
    bottom: "63%",
    zIndex: 2,
  },
  backgroundImage: {
    width: 411,
    height: 325,
    zIndex: 0,
    bottom: "90%",
    position: "relative",
    objectFit: "fill",
    transform: [{ rotate: "82deg" }],
  },
  pageContainer: { marginTop: 15 },

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

export default OnboardingPageOne;
