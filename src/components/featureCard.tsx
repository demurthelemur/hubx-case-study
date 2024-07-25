import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface FeatureCardProps {
  text: string;
  subtext: string;
  icon: string;
}

const iconLoader = (iconName: string) => {
  switch (iconName) {
    case "unlimitedIcon":
      return require("../assets/unlimitedIcon.png");
    case "fasterIcon":
      return require("../assets/fasterIcon.png");
    case "extraIcon":
      return require("../assets/extraIcon.png");
    default:
      throw new Error("Icon not found");
  }
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  text,
  subtext,
  icon,
}: FeatureCardProps) => {
  const iconSource = iconLoader(icon);

  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image
          source={iconSource} // Replace with your icon URL or local file
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.subtitle}>{subtext}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(35, 48, 41, 0.9)",
    borderRadius: 15,
    padding: 15,
    width: 150,
    height: 130,
    paddingLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  iconContainer: {
    backgroundColor: "#2A2E33",
    borderRadius: 8,
    marginBottom: 10,
  },
  icon: {
    width: 36,
    height: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#A7A7A7",
  },
});

export default FeatureCard;
