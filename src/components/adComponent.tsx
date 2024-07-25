import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const PremiumBanner = () => {
  return (
    <TouchableOpacity style={styles.banner}>
      <View style={styles.iconContainer}>
        <Image source={require("../assets/mailIcon.png")} style={styles.icon} />
        <View style={styles.notificationBadge}>
          <Text style={styles.notificationText}>1</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>FREE Premium Available</Text>
        <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Image source={require("../assets/arrowIcon.png")} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#4A3828",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  iconContainer: {
    position: "relative",
  },
  icon: {
    width: 40,
    height: 40,
  },
  notificationBadge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: "rgba(229, 201, 144, 1)",
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    color: "rgba(229, 201, 144, 1)",
    fontSize: 12,
  },
  arrowContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    color: "rgba(229, 201, 144, 1)",
    fontSize: 20,
  },
});

export default PremiumBanner;
