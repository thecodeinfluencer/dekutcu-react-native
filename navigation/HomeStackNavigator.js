import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeBar from "../screens/HomeBar";
import Fellowships from "../screens/Fellowships";
import CoreValues from "../screens/CoreValues";
import Contact from "../screens/Contact";
import Sermons from "../screens/Sermons";
import Player from "../screens/Player";
import { ThemeColors } from "../constants/Colors";

const Stack = createStackNavigator();

export default function HomeStackNavigator({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ThemeColors.appBarBackground,
        },
        headerTitleStyle: {
          fontFamily: "nunito-light",
        },
        headerTintColor: ThemeColors.themeColor,
      }}
    >
      <Stack.Screen
        name="Dedan Christians"
        component={HomeBar}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Fellowships" component={Fellowships} />
      <Stack.Screen name="CoreValues" component={CoreValues} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Sermons" component={Sermons} />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{
          headerTitle: "Playing Sermon",
        }}
      />
    </Stack.Navigator>
  );
}
