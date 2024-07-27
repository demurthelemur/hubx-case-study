import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const BottomNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require("../assets/home.png")} style={styles.icon} />
        <Text style={(styles.label, { color: "#28af6e" })}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require("../assets/diagnose.png")} style={styles.icon} />
        <Text style={styles.label}>Diagnose</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.scanButton}>
        <Image source={require("../assets/scan.png")} style={styles.scanIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require("../assets/garden.png")} style={styles.icon} />
        <Text style={styles.label}>My Garden</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image source={require("../assets/profile.png")} style={styles.icon} />
        <Text style={styles.label}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#fff",
    elevation: 10, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  navItem: {
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
  label: {
    fontSize: 12,
    color: "#888",
  },
  scanButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#2ab773",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#5cc994",
    alignItems: "center",
    bottom: 10,
  },
  scanIcon: {
    width: 30,
    height: 30,
    tintColor: "#fff",
  },
});

export default BottomNavBar;
