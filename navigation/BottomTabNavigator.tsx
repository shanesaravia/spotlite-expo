import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import FeedScreen from "../screens/FeedScreen";
import SearchScreen from "../screens/SearchScreen";
import CreateScreen from "../screens/CreateScreen";
import MessagesScreen from "../screens/MessagesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Logo, ProfileIcon } from "./HeaderNavigator";
import {
  BottomTabParamList,
  FeedParamList,
  SearchParamList,
  CreateParamList,
  MessagesParamList,
  NotificationsParamList,
  ProfileParamList,
} from "../types";

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

function CreateNavigator() {
  return (
    <CreateStack.Navigator>
      <CreateStack.Screen
        name="CreateScreen"
        component={CreateScreen}
        options={({ navigation }) => ({
          headerTitle: "Create",
          headerRight: () => <ProfileIcon navigation={navigation} />,
        })}
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
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: "Me" }}
      />
    </ProfileStack.Navigator>
  );
}
