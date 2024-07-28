import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import OnboardingPages from "./src/pages/OnboardingPages";
import GettingStartedPage from "./src/pages/getStartedPage";
import { useFonts } from "expo-font";
import SelectableButton from "./src/components/selectableButton";
import FeatureCard from "./src/components/featureCard";
import AppLoading from "expo-app-loading";
import PaywallPage from "./src/pages/paywallPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homepage from "./src/pages/homePage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData } from "./src/api/localStorage";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Rubik-Black": require("./src/assets/fonts/Rubik-Black.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./src/assets/fonts/Rubik-Light.ttf"),
  });

  const [onboardingDone, setOnboardingDone] = useState(null);

  useEffect(() => {
    async function fetchOnboardingStatus() {
      const status = await getData("onboardingDone");
      console.log(status);
      setOnboardingDone(status);
    }
    fetchOnboardingStatus();
  }, []);

  if (!fontsLoaded || onboardingDone === null) {
    return <AppLoading />;
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={
              onboardingDone ? "GettingStartedPage" : "GettingStartedPage"
            }
          >
            <Stack.Screen
              name="GettingStartedPage"
              component={GettingStartedPage}
            />
            <Stack.Screen name="OnboardingPages" component={OnboardingPages} />
            <Stack.Screen name="PaywallPage" component={PaywallPage} />
            <Stack.Screen name="Homepage" component={Homepage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}
