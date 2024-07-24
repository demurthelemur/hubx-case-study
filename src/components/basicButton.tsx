import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 327,
    height: 56,
    borderRadius: 12,
    backgroundColor: "#28AF6E",
    justifyContent: "center",
    alignItems: "center",
    opacity: 1,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default CustomButton;
