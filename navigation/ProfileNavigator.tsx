import React, { useRef } from "react";

import BottomSheet from "@gorhom/bottom-sheet";
import MenuIcon from "components/Profile/modules/MenuIcon";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsNavigator from "./SettingsNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ProfileNavigator = (): JSX.Element => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        options={({ navigation }) => ({
          headerTitle: "Me",
          headerRight: () => (
            <MenuIcon navigation={navigation} bottomSheetRef={bottomSheetRef} />
          ),
        })}
      >
        {({ navigation }) => (
          <ProfileScreen
            navigation={navigation}
            bottomSheetRef={bottomSheetRef}
          />
        )}
      </ProfileStack.Screen>
      <ProfileStack.Screen
        name="SettingsScreen"
        component={SettingsNavigator}
        options={{
          headerShown: false,
          // cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
