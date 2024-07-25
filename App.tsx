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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./src/assets/fonts/Rubik-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  let onobardingDone = true;

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName={
            onobardingDone ? "OnboardingPageOne" : "GettingStartedPage"
          }
        >
          <Stack.Screen
            name="GettingStartedPage"
            component={GettingStartedPage}
          />
          <Stack.Screen
            name="OnboardingPageOne"
            component={OnboardingPageOne}
          />
          <Stack.Screen
            name="OnboardingPageTwo"
            component={OnboardingPageTwo}
          />
          <Stack.Screen name="PaywallPage" component={PaywallPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
