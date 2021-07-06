import Icon from "../../Icon";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  navigation: any;
}

const ProfileIcon = ({ navigation }: Props): JSX.Element => {
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
