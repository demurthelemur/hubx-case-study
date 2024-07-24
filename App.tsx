import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import CustomButton from "./src/components/basicButton";
import PageIndicator from "./src/components/pageIndicator";

export default function App() {
  const handlePress = () => {
    console.log("Button Pressed");
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text style={styles.text}>Centered Text</Text>
        <CustomButton title="Click Me" onPress={handlePress} />
        <PageIndicator currentPage={0} totalPages={3} />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // centers vertically
    alignItems: "center", // centers horizontally
  },
  text: {
    fontSize: 20,
  },
});
