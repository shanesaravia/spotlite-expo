import {
  BottomTabParamList,
  CreateParamList,
  FeedParamList,
  MessagesParamList,
  NotificationsParamList,
  ProfileParamList,
  SearchParamList,
} from "../types";
import React, { useRef } from "react";

import AboutScreen from "screens/settings/AboutScreen";
import BottomSheet from "@gorhom/bottom-sheet";
import Colors from "../constants/Colors";
import CreateScreen from "../screens/CreateScreen";
import FeedScreen from "../screens/FeedScreen";
import { Ionicons } from "@expo/vector-icons";
import Logo from "components/Logo";
import MenuIcon from "components/Profile/modules/MenuIcon";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import PrivacyPolicyScreen from "screens/settings/PrivacyPolicyScreen";
import ProfileIcon from "components/Profile/modules/ProfileIcon";
import ProfileScreen from "../screens/ProfileScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "screens/settings/SettingsScreen";
import TermsAndConditionsScreen from "screens/settings/TermsAndConditionsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import useColorScheme from "../hooks/useColorScheme";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabNavigator: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false,
      }}
    >
      <BottomTab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="home-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="search-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="add-outline" color={color} />
          ),
          // tabBarVisible: false,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="chatbubble-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }: { color: string }) => (
            <TabBarIcon name="notifications-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const FeedStack = createStackNavigator<FeedParamList>();

function FeedNavigator() {
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
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
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
}

const CreateStack = createStackNavigator<CreateParamList>();
CreateStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;

  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "ProductDetails") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

function CreateNavigator() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
      <CreateStack.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
    </CreateStack.Navigator>
  );
}

const MessagesStack = createStackNavigator<MessagesParamList>();

function MessagesNavigator() {
  return (
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
  );
}

const NotificationsStack = createStackNavigator<NotificationsParamList>();

function NotificationsNavigator() {
  return (
    <NotificationsStack.Navigator>
      <NotificationsStack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={({ navigation }) => ({
          headerTitle: "Notifications",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        })}
      />
      <NotificationsStack.Screen
        name="ProfileScreen"
        component={ProfileNavigator}
        options={{
          headerTitle: "Profile",
          headerShown: false,
        }}
      />
    </NotificationsStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
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
}

const SettingsStack = createStackNavigator();

function SettingsNavigator() {
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
}
