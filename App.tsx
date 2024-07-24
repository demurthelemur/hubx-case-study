import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import OnboardingPageOne from "./src/pages/onboardingPageOne";

export default function App() {
  const handlePress = () => {
    console.log("Button Pressed");
  };

  return (
    <Provider store={store}>
      <OnboardingPageOne />
    </Provider>
  );
}
