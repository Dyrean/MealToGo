import camelize from "camelize";
import { host, isMock, isLocalMock } from "../../utils/env";
import { mocks, mockImages } from "./mock";

export const restaurantsRequest = (location) => {
  if (isLocalMock) {
    return new Promise((resolve, reject) => {
      const mock = mocks[location];
      if (!mock) {
        reject("not found");
      }
      resolve(mock);
    });
  }
  return fetch(`${host}/placesNearby?location=${location}&${isMock}`).then(
    (res) => {
      return res.json();
    }
  );
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    if (isLocalMock) {
      restaurant.photos = restaurant.photos.map((p) => {
        return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
      });
    }
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};
