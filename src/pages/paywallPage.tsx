import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ImageBackground,
} from "react-native";
import FeatureCard from "../components/featureCard";
import SelectableButton from "../components/selectableButton";
import BasicButton from "../components/basicButton";
import CloseButton from "../components/closeButton";

interface PaywallPageProps {
  // Define your component props here
}

type Feature = {
  text: string;
  subtext: string;
  icon: string;
};

const features: Feature[] = [
  {
    text: "Unlimited",
    subtext: "Plant Identity",
    icon: "unlimitedIcon",
  },
  {
    text: "Faster",
    subtext: "Process",
    icon: "fasterIcon",
  },
  {
    text: "Premium",
    subtext: "Support",
    icon: "extraIcon",
  },
];

const PaywallPage: React.FC<PaywallPageProps> = () => {
  function buttonClicked(): void {
    console.log("Button clicked");
  }
  const [monthlySelected, setmonthlySelected] = React.useState(true);
  const [yearlySelected, setYearlySelected] = React.useState(false);

  function monthlyButtonClicked(): void {
    setmonthlySelected(true);
    setYearlySelected(false);
  }
  function yearlyButtonClicked(): void {
    setmonthlySelected(false);
    setYearlySelected(true);
  }

  return (
    <View style={styles.backgroundColor}>
      <ImageBackground
        source={require("../assets/paywallBackgroundImage.png")}
        style={styles.background}
      >
        <View style={styles.closeButtonContainer}>
          <CloseButton onPress={() => console.log("Close button clicked")} />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>
            PlantApp<Text style={styles.subTitle}> Premium </Text>
          </Text>
          <Text style={styles.subText}>Access all features</Text>
          <View style={styles.flatListContainer}>
            <FlatList
              horizontal
              data={features}
              renderItem={({ item }) => (
                <FeatureCard
                  text={item.text}
                  subtext={item.subtext}
                  icon={item.icon}
                />
              )}
              keyExtractor={(item) => item.text}
              contentContainerStyle={styles.scrollContent}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.selectableButtonContainer}>
              <SelectableButton
                isSelected={monthlySelected}
                mainText="1 Month"
                subText="$2.99/month, auto renewable"
                onPress={monthlyButtonClicked}
              />
              <SelectableButton
                isSelected={yearlySelected}
                mainText="1 Year"
                subText="First 3 days free, then $529.99/year"
                onPress={yearlyButtonClicked}
              />
            </View>
            <BasicButton title="Try free for 3 days" onPress={buttonClicked} />
            <Text style={styles.undertext}>
              After the 3-day free trial period you’ll be charged ₺274.99 per
              year unless you cancel before the trial expires. Yearly
              Subscription is Auto-Renewable
            </Text>
            <Text style={styles.sublinks}>Terms • Privacy • Restore</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    marginTop: 270,
  },
  background: {
    width: 378,
    height: 490,
  },
  backgroundColor: {
    backgroundColor: "#101e17",
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
    fontFamily: "Rubik-Regular",
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 30,
    color: "#ffffff",
    fontWeight: "100",
    fontFamily: "Rubik-Light",
  },
  subText: {
    fontSize: 17,
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Rubik-Light",
    marginBottom: 15,
  },
  scrollContent: {},
  flatListContainer: {
    height: 140,
  },
  buttonContainer: {
    flex: 1,
    alignSelf: "center",
    marginTop: 10,
  },
  selectableButtonContainer: {
    marginBottom: 15,
  },
  undertext: {
    paddingTop: 7,
    fontSize: 9,
    color: "rgba(255, 255, 255, 0.52)",
    textAlign: "center",
    fontWeight: "300",
  },
  sublinks: {
    paddingTop: 7,
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.52)",
    textAlign: "center",
    letterSpacing: 1,
  },
  closeButtonContainer: {
    top: 50,
    left: 335,
    position: "absolute",
  },
});

export default PaywallPage;
