import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import OnboardingPageOne from "./src/pages/onboardingPageOne";
import OnboardingPageTwo from "./src/pages/onboardingPageTwo";
import GettingStartedPage from "./src/pages/getStartedPage";
import { useFonts } from "expo-font";
import SelectableButton from "./src/components/selectableButton";
import FeatureCard from "./src/components/featureCard";
import AppLoading from "expo-app-loading";
import PaywallPage from "./src/pages/paywallPage";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./src/assets/fonts/Rubik-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <PaywallPage></PaywallPage>
    </Provider>
  );
}
