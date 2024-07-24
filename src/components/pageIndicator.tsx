// PageIndicator.tsx
import React from "react";
import { View, StyleSheet } from "react-native";

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicator: React.FC<PageIndicatorProps> = ({
  currentPage,
  totalPages,
}) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: totalPages }, (_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            { opacity: index === currentPage ? 1 : 0.3 },
            {
              height: index === currentPage ? 10 : 6,
              width: index === currentPage ? 10 : 6,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "#000000",
  },
});

export default PageIndicator;
