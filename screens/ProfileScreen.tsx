import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { ListItem, Text, useTheme } from "react-native-elements";
import React, { useMemo } from "react";

import Icon from "components/Icon";
import Profile from "components/Profile";
import firebase from "firebase";
import { persistConfig } from "configs";
import { purgeStoredState } from "redux-persist";
import { useDispatch } from "react-redux";
import { userLogout } from "store/actions/user";

// import firebase from "firebase";
interface Props {
  bottomSheetRef: any;
  navigation: any;
}

const ProfileScreen = ({ navigation, bottomSheetRef }: Props): JSX.Element => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const snapPoints = useMemo(() => ["0%", "30%"], []);

  const firebaseSignOut = () => {
    purgeStoredState(persistConfig);
    dispatch(userLogout());
    firebase.auth().signOut();
  };

  return (
    <>
      <Profile />
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        backdropComponent={BottomSheetBackdrop}
      >
        <ListItem
          onPress={() => {
            bottomSheetRef.current.collapse();
            navigation.navigate("SettingsScreen");
          }}
        >
          <Icon source="material" name="settings" color={theme.colors?.grey} />
          <Text style={{ fontSize: 18 }}>Settings</Text>
        </ListItem>
        <ListItem onPress={() => console.log("TEST settings clicked")}>
          <Icon source="material" name="mode-edit" color={theme.colors?.grey} />
          <Text style={{ fontSize: 18 }}>Edit Profile</Text>
        </ListItem>
        <ListItem onPress={firebaseSignOut}>
          <Icon source="material" name="logout" color={theme.colors?.grey} />
          <Text style={{ fontSize: 18 }}>Logout</Text>
        </ListItem>
      </BottomSheet>
    </>
  );
};

export default ProfileScreen;
