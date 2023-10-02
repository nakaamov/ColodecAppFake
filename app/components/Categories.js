import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { BlurView } from "expo-blur";
import colors from "../config/colors";
import SPACING from "../config/SPACING";

import categories from "../config/categories";

const Categories = ({ onChange }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const handlePress = (id) => {
    setActiveCategoryId(id);
    onChange(id);
  };

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ marginVertical: 20, marginHorizontal: 8, }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.id)}
          style={{ marginRight: SPACING * 2, alignItems: "center" }}
        >
          <Text
            style={[
              { color: colors.gray, fontSize: SPACING * 2 },
              activeCategoryId === item.id && { color: colors.green },
            ]}
          >
            {item.name}
          </Text>
          {activeCategoryId === item.id && (
            <View
              style={{
                height: 5,
                width: 5,
                borderRadius: 500,
                backgroundColor: colors.green,
                borderRadius: SPACING / 2,
                marginTop: SPACING / 2,
              }}
            />
          )}
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
