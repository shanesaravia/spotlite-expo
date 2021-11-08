import { Avatar, Card, Text, useTheme } from "react-native-elements";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";

import { ThemeType } from "../../types";
import Toast from "react-native-root-toast";
import { useKeyboard } from "hooks";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";

interface state {
  user: user;
}

interface user {
  username: string;
}

const CreateTextScreen = (): JSX.Element => {
  const { theme } = useTheme();
  const user = useSelector((state: state) => state.user);
  const [charCounter, setCharCounter] = useState(0);
  const [text, setText] = useState("");
  const keyboardHeight = useKeyboard();
  const navigation = useNavigation();

  const MAX_CHAR_LIMIT = 500;
  const SHOW_CHAR_LIMIT = 100;
  const RED_CHAR_LIMIT = 20;

  const handleChangeText = (text: string) => {
    setText(text);
    setCharCounter(text.length);
  };

  return (
    <>
      <View style={styles(theme).container}>
        <View style={styles(theme).headingContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Camera");
            }}
          >
            <MaterialIcons
              size={40}
              name="photo-camera"
              color={theme?.colors?.grey3}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
              setText("");
              Toast.show("Posted for your fans to see!", {
                backgroundColor: theme.colors?.secondary,
                duration: Toast.durations.LONG,
                delay: 100,
              });
              console.log("Publish text post");
            }}
          >
            <MaterialCommunityIcons
              size={50}
              name="send-circle"
              color={theme.colors?.primary}
            />
          </TouchableOpacity>
        </View>
        <Card.Divider />
        <View style={styles(theme).userContainer}>
          <Avatar
            rounded
            icon={{ type: "material", name: "person" }}
            size={40}
            activeOpacity={0.7}
            containerStyle={styles(theme).avatar}
          />
          <Text h4>{user.username}</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <TextInput
            multiline={true}
            placeholder={"Write a message to your fans..."}
            maxLength={MAX_CHAR_LIMIT}
            onChangeText={handleChangeText}
            style={styles(theme).textPost}
            value={text}
          />
        </ScrollView>
      </View>
      {MAX_CHAR_LIMIT - charCounter <= SHOW_CHAR_LIMIT ? (
        <Text
          style={[
            styles(theme, keyboardHeight).charCount,
            MAX_CHAR_LIMIT - charCounter <= RED_CHAR_LIMIT
              ? { color: theme.colors?.error }
              : null,
          ]}
        >
          {MAX_CHAR_LIMIT - charCounter}
        </Text>
      ) : null}
    </>
  );
};

const styles = (theme: ThemeType, ...props: any) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      backgroundColor: theme.colors?.white,
      flex: 1,
      paddingTop: 25,
    },
    headingContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    postButton: {
      height: 40,
      width: 40,
      borderRadius: 50,
    },
    userContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: { margin: 4, backgroundColor: theme?.colors?.grey4 },
    textPost: {
      fontSize: 18,
    },
    charCount: {
      position: "absolute",
      bottom: props[0],
      right: 10,
      zIndex: 2,
      elevation: 2,
      color: theme.colors?.grey3,
    },
  });

export default CreateTextScreen;
