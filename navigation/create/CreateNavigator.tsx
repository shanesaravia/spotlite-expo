import CreateCameraScreen from "screens/create/CreateCameraScreen";
import CreateMediaNavigator from "./CreateMediaNavigator";
import CreateTextScreen from "screens/create/CreateTextScreen";
import EditMediaScreen from "screens/create/EditMediaScreen";
import React from "react";
import SelectMediaScreen from "screens/create/SelectMediaScreen";
import { createStackNavigator } from "@react-navigation/stack";

const CreateStack = createStackNavigator();

const CreateNavigator = (): JSX.Element => {
  return (
    <CreateStack.Navigator
      initialRouteName="CreateMedia"
      screenOptions={{ headerShown: false }}
    >
      <CreateStack.Screen name="CreateMedia" component={CreateMediaNavigator} />
      <CreateStack.Screen name="Select" component={SelectMediaScreen} />
      <CreateStack.Screen name="Edit" component={EditMediaScreen} />
    </CreateStack.Navigator>
  );
};

export default CreateNavigator;
