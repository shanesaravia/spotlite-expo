import { Avatar, Text, useTheme } from "react-native-elements";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import Rating from "components/Profile/modules/Rating";
import { spotliteApi } from "utils/axios";
import { useSelector } from "react-redux";

const Profile = (): JSX.Element => {
  const { theme } = useTheme();
  const [followers, setFollowers] = useState(0);
  const [fame, setFame] = useState(0);
  const [following, setFollowing] = useState(0);
  const [bio, setBio] = useState("");
  const [username, setUsername] = useState("");
  const user = useSelector((state) => state.user);

  useEffect(() => {
    spotliteApi
      .get(`/users/${user.id}`)
      .then((resp) => {
        const { username } = resp.data;
        const { followers, following, fame, bio } = resp.data.profile;
        setFollowers(followers);
        setFollowing(following);
        setFame(fame);
        setBio(bio);
        setUsername(username);
      })
      .catch((err) => {
        console.error("err", err);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Avatar
        rounded
        icon={{ type: "material", name: "person" }}
        size={100}
        backgroundColor={theme.colors?.grey4}
        activeOpacity={0.7}
        containerStyle={styles.avatarContainer}
      />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.ratingsContainer}>
        <Rating
          icon={<MaterialIcons name="people" size={28} color="black" />}
          text={"Followers"}
          rating={followers}
        />
        <Rating
          icon={<MaterialIcons name="star" size={28} color="black" />}
          text={"Fame"}
          rating={fame}
        />
        <Rating
          icon={<MaterialIcons name="person" size={28} color="black" />}
          text={"Following"}
          rating={following}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 20,
  },
  ratingsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  username: {
    alignSelf: "center",
    fontWeight: "bold",
  },
  bio: {
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  avatarContainer: {
    marginVertical: 10,
    alignSelf: "center",
  },
});

export default Profile;
