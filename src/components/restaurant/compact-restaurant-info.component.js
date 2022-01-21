import React from "react";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";
import {
  CompactImage,
  CompactWebview,
  Item,
} from "./compact-restaurant-info.styles";

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant }) => {
  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
