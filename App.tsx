import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import OnboardingPageOne from "./src/pages/onboardingPageOne";
import OnboardingPageTwo from "./src/pages/onboardingPageTwo";
import GettingStartedPage from "./src/pages/getStartedPage";
import { useFonts } from "expo-font";
import SelectableButton from "./src/components/selectableButton";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <View style={{ alignItems: "center", paddingTop: 400 }}>
        <SelectableButton title="test" />
      </View>
    </Provider>
  );
}
