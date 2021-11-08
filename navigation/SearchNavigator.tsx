import ProfileIcon from "components/Profile/modules/ProfileIcon";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import SearchScreen from "screens/SearchScreen";
import { createStackNavigator } from "@react-navigation/stack";

const SearchStack = createStackNavigator();

const SearchNavigator = (): JSX.Element => {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={({ navigation }) => ({
          headerTitle: "Discover",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        })}
      />
      <SearchStack.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchNavigator;
