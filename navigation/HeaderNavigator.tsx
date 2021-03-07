import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/ProfileScreen';
import { ProfileParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';


const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Me' }}
      />
    );
}

const ProfileIcon = ({navigation}: {navigation: any}) => {
  return <HeaderIcon name="person-outline" color={'black'} onpress={() => navigation.push('ProfileScreen')} />
}

const HeaderIcon = (props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string; onpress: any}) => {
  return (
    <TouchableWithoutFeedback onPress={props.onpress}>
      <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
    </TouchableWithoutFeedback>
  )
}

export {
  ProfileIcon,
  HeaderIcon
};