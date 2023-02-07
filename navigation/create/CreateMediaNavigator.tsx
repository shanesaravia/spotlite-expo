import CreateCameraScreen from "screens/create/CreateCameraScreen";
import CreateTextScreen from "screens/create/CreateTextScreen";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const CreateMediaNavigator = (): JSX.Element => {
  return (
    <Tab.Navigator initialRouteName="Camera" tabBar={() => null}>
      <Tab.Screen name="Camera" component={CreateCameraScreen} />
      <Tab.Screen name="Text" component={CreateTextScreen} />
    </Tab.Navigator>
  );
};

export default CreateMediaNavigator;
