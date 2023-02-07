import FeedScreen from "screens/FeedScreen";
import Logo from "components/Logo";
import ProfileIcon from "components/Profile/modules/ProfileIcon";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const FeedStack = createStackNavigator();

const FeedNavigator = (): JSX.Element => {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={({ navigation }) => ({
          headerTitle: "",
          headerRight: () => <ProfileIcon navigation={navigation} />,
          headerLeft: () => <Logo />,
        })}
      />
      <FeedStack.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
    </FeedStack.Navigator>
  );
};

export default FeedNavigator;
