import EmailConfirmIcon from "assets/images/email-verify.png";
import firebase from "firebase";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";

interface Props {
  title: string;
  email: string;
}

const EmailConfirm = ({ title, email = null }: Props): JSX.Element => {
  return (
    <View>
      <Text h1 style={styles.header}>
        {title}
      </Text>
      <Text style={styles.emailText}>
        An email has been sent to:{"\n"}
        <Text style={styles.emailAddress}>
          {email || firebase.auth().currentUser.email}
        </Text>
      </Text>
      <Image source={EmailConfirmIcon} style={styles.fullImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  fullImage: {
    resizeMode: "contain",
    width: 250,
    alignSelf: "center",
    marginVertical: 80,
  },
  header: {
    textAlign: "center",
    marginTop: 40,
  },
  buttonContainer: {
    position: "relative",
    width: "100%",
    bottom: 30,
  },
  emailText: {
    textAlign: "center",
    marginTop: 50,
  },
  emailAddress: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default EmailConfirm;
