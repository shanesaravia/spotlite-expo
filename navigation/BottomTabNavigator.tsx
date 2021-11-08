import { BottomTabParamList } from "../types";
import Colors from "../constants/Colors";
import CreateNavigator from "./create/CreateNavigator";
import FeedNavigator from "./FeedNavigator";
import { Ionicons } from "@expo/vector-icons";
import MessagesNavigator from "./MessagesNavigator";
import NotificationsNavigator from "./NotificationsNavigator";
import React from "react";
import SearchNavigator from "./SearchNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
        // keyboardHidesTabBar: true,
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
            <TabBarIcon name="add-outline" color={color} size={40} />
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
  size?: number;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
