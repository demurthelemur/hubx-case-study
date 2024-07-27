import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

interface Props {
  text: string;
  image: string;
}

const CategoryCard: React.FC<Props> = ({ text, image }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.background}
      >
        <Text style={styles.title}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 158,
    height: 152,
    borderRadius: 12,
    backgroundColor: "rgba(244, 246, 246, 1)",
    borderWidth: 0.5,
    borderColor: "rgba(41, 187, 137, 0.18)",
    overflow: "hidden",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    maxWidth: 85,
    marginTop: 16,
    marginLeft: 16,
    fontWeight: "500",
    lineHeight: 21,
    letterSpacing: -0.32,
    fontFamily: "Rubik-Regular",
  },
  background: {
    height: 158,
    width: 152,
    overflow: "hidden",
  },
});

export default CategoryCard;
