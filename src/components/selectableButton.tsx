import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  GestureResponderEvent,
} from "react-native";

interface CustomSelectableButtonProps {
  isSelected: boolean;
  mainText: string;
  subText: string;
  onPress: (event: GestureResponderEvent) => void;
}

const SubscriptionCard: React.FC<CustomSelectableButtonProps> = ({
  isSelected,
  mainText,
  subText,
  onPress,
}) => {
  return (
    <Pressable
      style={isSelected ? styles.selectedCard : styles.card}
      onPress={onPress}
    >
      <View style={styles.content}>
        <View style={styles.leftSection}>
          <View
            style={isSelected ? styles.selectedRadioButton : styles.RadioButton}
          />
          <View>
            <Text style={styles.title}>{mainText}</Text>
            <Text style={styles.subtitle}>{subText}</Text>
          </View>
        </View>
        {isSelected && (
          <View style={styles.rightSection}>
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>Save 50%</Text>
            </View>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  selectedCard: {
    backgroundColor: "rgb(17, 34, 25)",
    width: 327,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1.5,
    borderColor: "#28AF6E",
    marginTop: 5,
    marginBottom: 5,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    width: 327,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 15,
    padding: 15,
    borderWidth: 1.5,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  selectedRadioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 6,
    backgroundColor: "#FFFFFF",
    borderColor: "#28AF6E",
    marginRight: 10,
  },
  RadioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 6,
    backgroundColor: "rgb(46, 58, 52)",
    borderColor: "rgb(46, 58, 52)",
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 12,
    color: "#A7A7A7",
  },
  rightSection: {
    justifyContent: "center",
    alignItems: "center",
  },
  discountBadge: {
    position: "absolute",
    top: -36,
    right: -16,
    backgroundColor: "#28AF6E",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 11,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,
  },
  discountText: {
    color: "#ffffff",
    fontSize: 12,
    width: 56,
    height: 18,
    fontWeight: "bold",
  },
});

export default SubscriptionCard;
