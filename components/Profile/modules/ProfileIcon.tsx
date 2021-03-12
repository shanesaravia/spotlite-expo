import React from "react";
import Icon from "../../Icon";
import { StyleSheet } from "react-native";

const ProfileIcon = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <Icon
      name="person-outline"
      style={styles.icon}
      color={"black"}
      onpress={() => navigation.push("ProfileScreen")}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});

export default ProfileIcon;
