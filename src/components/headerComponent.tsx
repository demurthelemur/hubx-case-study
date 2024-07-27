import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
} from "react-native";

interface HeaderComponentProps {}

const HeaderComponent: React.FC<HeaderComponentProps> = ({}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/headerBackground.png")}
        style={styles.background}
      >
        <Text style={styles.subTitle}>Hi, plant lover!</Text>
        <Text style={styles.title}>Good Afternoon! ⛅</Text>
        <View style={styles.searchbarContainer}>
          <Image source={require("../assets/searchIcon.png")} />
          <TextInput
            style={styles.input}
            placeholder={"Search for plants"}
            returnKeyType="search"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 175,
    paddingTop: 50,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  subTitle: {
    fontSize: 16,
    paddingHorizontal: 24,
    fontWeight: "400",
  },
  title: {
    fontSize: 24,
    paddingHorizontal: 24,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  searchbarContainer: {
    flexDirection: "row",
    height: 44,
    paddingHorizontal: 16,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "rgba(60, 60, 67, 0.2)",
    marginHorizontal: 24,
    marginVertical: 14,
  },
});

export default HeaderComponent;
