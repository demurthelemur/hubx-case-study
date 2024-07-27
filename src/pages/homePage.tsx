import React, { useEffect } from "react";
import { View, Text } from "react-native";
import PremiumBanner from "../components/adComponent";
import HeaderComponent from "../components/headerComponent";
import { useAppDispatch, useAppSelector, RootState } from "../app/store";
import { fetchQuestion } from "../app/questions";
import { fetchCategory } from "../app/categories";
import { useDispatch, useSelector } from "react-redux";

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
      <View>
        <HeaderComponent />
        <PremiumBanner />
        <Text>{categories[0].name}</Text>
      </View>
    );
  } else {
    return <Text>No data found</Text>;
  }
};

export default Homepage;
