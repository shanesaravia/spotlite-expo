import { Image } from "react-native-elements";
import LoadingGIF from "assets/images/loading.gif";
import React from "react";
import { View } from "react-native";

const Loading = (props: any) => {
  const { style } = props;

  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        elevation: 999,
        ...style,
      }}
    >
      <Image source={LoadingGIF} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default Loading;
