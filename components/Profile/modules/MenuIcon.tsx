import BottomSheet from "@gorhom/bottom-sheet";
import Icon from "../../Icon";
import React from "react";
import { StyleSheet } from "react-native";

interface Props {
  navigation: any;
  bottomSheetRef: any;
}

const MenuIcon = ({ navigation, bottomSheetRef }: Props): JSX.Element => {
  // const { expand } = useBottomSheet();
  return (
    <Icon
      name="menu"
      style={styles.icon}
      color={"black"}
      onPress={() => {
        bottomSheetRef.current?.expand();
      }}
      // onpress={() => bottomSheetRef.current.expand()}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
});

export default MenuIcon;
