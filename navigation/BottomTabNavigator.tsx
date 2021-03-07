import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FeedScreen from '../screens/FeedScreen';
import SearchScreen from '../screens/SearchScreen';
import CreateScreen from '../screens/CreateScreen';
import MessagesScreen from '../screens/MessagesScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { ProfileIcon } from './HeaderNavigator';
import { BottomTabParamList, FeedParamList, SearchParamList, CreateParamList, MessagesParamList, NotificationsParamList } from '../types';


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].tint,
        showLabel: false
      }}>
      <BottomTab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Create"
        component={CreateNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="add-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="chatbubble-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NotificationsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="notifications-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
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
          headerTitle: 'Feed',
          headerRight: () => <ProfileIcon navigation={navigation} />
        })}
      />
      <FeedStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: 'Profile',
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
        options={{
          headerTitle: 'Discover',
          headerRight: () => <TabBarIcon name="person-outline" color={'black'} />
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
        options={{
          headerTitle: 'Create',
          headerRight: () => <Test />
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
        options={{
          headerTitle: 'Messages',
          headerRight: () => <Test />
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
        options={{
          headerTitle: 'Notifications',
          headerRight: () => <Test />
        }}
      />
    </NotificationsStack.Navigator>
  );
}

import { Text, View } from '../components/Themed';
import Navigation from '.';

function Test() {
  return (<Text>Testing123</Text>)
}

// const ProfileStack = createStackNavigator<ProfileParamList>();

// function ProfileNavigator() {
//   return (
//     <ProfileStack.Navigator>
//       <ProfileStack.Screen
//         name="ProfileScreen"
//         component={ProfileScreen}
//         options={{ headerTitle: 'Me' }}
//       />
//     </ProfileStack.Navigator>
//   );
// }