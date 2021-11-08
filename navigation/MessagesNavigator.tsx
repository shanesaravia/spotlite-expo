import MessagesScreen from "screens/MessagesScreen";
import ProfileIcon from "components/Profile/modules/ProfileIcon";
import ProfileNavigator from "./ProfileNavigator";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MessagesStack = createStackNavigator();

const MessagesNavigator = (): JSX.Element => {
  return (
    <React.Fragment>
      <MessagesStack.Navigator>
        <MessagesStack.Screen
          name="MessagesScreen"
          component={MessagesScreen}
          options={({ navigation }) => ({
            headerTitle: "Messages",
            headerRight: () => <ProfileIcon navigation={navigation} />,
          })}
        />
        <MessagesStack.Screen
          name="ProfileScreen"
          component={ProfileNavigator}
          options={{
            headerTitle: "Profile",
            headerShown: false,
          }}
        />
      </MessagesStack.Navigator>
    </React.Fragment>
  );
};

export default MessagesNavigator;
