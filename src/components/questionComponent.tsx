import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BlurView } from "expo-blur";

interface Props {
  text: string;
  image: string;
}

const QuestionComponent: React.FC<Props> = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/testBackground.png")}
        style={styles.background}
      >
        <View style={styles.textContainer}>
          <BlurView tint="dark" intensity={90} style={styles.blurContainer}>
            <Text style={styles.text}>
              How to identify plants easily with PlantApp?
            </Text>
          </BlurView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 240,
    height: 164,
    borderRadius: 12,
    backgroundColor: "lightgrey",
    overflow: "hidden",
  },
  background: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "100%",
    height: 64,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    marginTop: "auto",
  },
  blurContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontWeight: "400",
    width: 200,
    textAlign: "left",
    color: "white",
    fontFamily: "Rubik-Regular",
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
});

export default QuestionComponent;
