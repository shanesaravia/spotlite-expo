import { Dimensions, StyleSheet, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";

import { ImageCrop } from "expo-image-cropper-gl-react";

// @ts-ignore

interface Props {
  media: any;
}

const MediaCrop = (props: Props) => {
  const { media } = props;
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <View style={styles.container}>
      <ImageCrop
        image={media.uri}
        cropHeight={500}
        cropWidth={500}
        imageWidth={media.width}
        imageHeight={media.height}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 500,
  },
  image: {},
});

export default MediaCrop;
