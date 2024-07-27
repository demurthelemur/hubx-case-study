import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  GestureResponderEvent,
  TouchableHighlight,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableHighlight style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
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
