import { ListItem, Text, useTheme } from "react-native-elements";

import Icon from "components/Icon";
import React from "react";

interface Props {
  navigation: any;
}

const SettingsScreen = ({ navigation }: Props): JSX.Element => {
  const { theme } = useTheme();

  return (
    <>
      <ListItem onPress={() => navigation.push("TermsAndConditionsScreen")}>
        <Icon source="material" name="privacy-tip" color={theme.colors.grey} />
        <Text style={{ fontSize: 18 }}>Terms And Conditions</Text>
      </ListItem>
      <ListItem onPress={() => navigation.push("PrivacyPolicyScreen")}>
        <Icon source="material" name="policy" color={theme.colors.grey} />
        <Text style={{ fontSize: 18 }}>Privacy Policy</Text>
      </ListItem>
      <ListItem onPress={() => navigation.push("AboutScreen")}>
        <Icon source="material" name="info" color={theme.colors.grey} />
        <Text style={{ fontSize: 18 }}>About</Text>
      </ListItem>
    </>
  );
};

export default SettingsScreen;
