import AboutScreen from "screens/settings/AboutScreen";
import PrivacyPolicyScreen from "screens/settings/PrivacyPolicyScreen";
import React from "react";
import SettingsScreen from "screens/settings/SettingsScreen";
import TermsAndConditionsScreen from "screens/settings/TermsAndConditionsScreen";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsStack = createStackNavigator();

const SettingsNavigator = (): JSX.Element => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: "Settings",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
      <SettingsStack.Screen
        name="TermsAndConditionsScreen"
        component={TermsAndConditionsScreen}
        options={{
          headerTitle: "Terms And Conditions",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
      <SettingsStack.Screen
        name="PrivacyPolicyScreen"
        component={PrivacyPolicyScreen}
        options={{
          headerTitle: "Privacy Policy",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
      <SettingsStack.Screen
        name="AboutScreen"
        component={AboutScreen}
        options={{
          headerTitle: "About",
          cardStyle: { backgroundColor: "#FFFFFF" },
        }}
      />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
