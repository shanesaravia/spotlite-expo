import { Dimensions, StyleSheet } from "react-native";
import { Image, View } from "react-native";

import MediaCrop from "components/Create/MediaCrop";
import React from "react";

const EditMediaScreen = ({ route }: { route: any }): JSX.Element => {
  const { media } = route.params;
  console.log("media: ", media);
  return (
    <View>
      <MediaCrop media={media} />
      {/* <Image style={styles.image} source={{ uri: media.uri }} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    // width: "100%",
    // marginTop: 100,
    height: "100%",
    maxHeight: 600,
    // width: Dimensions.get("window").width / 3 - 10,
    // height: Dimensions.get("window").width / 3 - 10,
    // margin: 5,
    resizeMode: "contain",
  },
});

export default EditMediaScreen;
