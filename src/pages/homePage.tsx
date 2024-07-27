import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import PremiumBanner from "../components/adComponent";
import HeaderComponent from "../components/headerComponent";
import { useAppDispatch, useAppSelector, RootState } from "../app/store";
import { fetchQuestion } from "../app/questions";
import { fetchCategory } from "../app/categories";
import { useDispatch, useSelector } from "react-redux";
import QuestionComponent from "../components/questionComponent";
import CategoryCard from "../components/categoryCard";
import BottomNavBar from "../components/bottomNavBar";

const Homepage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchQuestion());
    dispatch(fetchCategory());
  }, []);

  const { questions, questionsLoading } = useSelector(
    (state: RootState) => state.question
  );
  const { categories, categoriesLoading } = useSelector(
    (state: RootState) => state.category
  );

  if (categoriesLoading || questionsLoading) {
    return <Text>Loading...</Text>;
  } else if (
    !categoriesLoading &&
    categories.length !== 0 &&
    !questionsLoading
  ) {
    return (
      <View style={styles.container}>
        <HeaderComponent />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <PremiumBanner />
          <Text style={styles.subTitle}>Get Started</Text>
          <View style={styles.questionsContainer}>
            <FlatList
              horizontal
              data={questions}
              renderItem={({ item }) => (
                <QuestionComponent text={item.title} image={item.image_uri} />
              )}
              contentContainerStyle={styles.scrollContent}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
          <View style={styles.categoriesContianer}>
            <FlatList
              data={categories}
              renderItem={({ item }) => (
                <CategoryCard text={item.title} image={item.image.url} />
              )}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              contentContainerStyle={styles.scrollContent}
              columnWrapperStyle={styles.row} // Optional: to style each row
              showsVerticalScrollIndicator={false}
            />
          </View>
        </ScrollView>
        <BottomNavBar />
      </View>
    );
  } else {
    return <Text>No data found</Text>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 16,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "500",
    marginLeft: 24,
    marginBottom: 16,
  },
  questionsContainer: {
    marginLeft: 24,
  },
  scrollContent: {},
  row: {
    justifyContent: "space-between",
  },
  categoriesContianer: { marginHorizontal: 24, marginTop: 24 },
});

export default Homepage;
