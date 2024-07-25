import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

interface CloseButtonProps {
  onPress: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>X</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 24, // Adjust the size as needed
    height: 24,
    borderRadius: 12, // Half of width and height to make it circular
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff", // White color for the "X"
    fontSize: 12, // Adjust the size as needed
    fontWeight: "600",
    textAlign: "center",
  },
});

export default CloseButton;
