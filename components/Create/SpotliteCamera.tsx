import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import { Camera } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/core";

const SpotliteCamera = (): JSX.Element => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const isFocused = useIsFocused();

  const { height, width } = Dimensions.get("window");
  const screenRatio = height / width;
  const [imagePadding, setImagePadding] = useState(0);
  const [ratio, setRatio] = useState("4:3"); // default is 4:3
  const [isRatioSet, setIsRatioSet] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [flashMode, setFlashMode] = useState("auto");
  const [lastPress, setLastPress] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    return Camera.pausePreview;
  }, []);

  // set the camera ratio and padding.
  // this code assumes a portrait mode screen
  const prepareRatio = async () => {
    let desiredRatio = "16:9"; // Start with the system default
    // This issue only affects Android
    if (Platform.OS === "android") {
      const ratios = await cameraRef.getSupportedRatiosAsync();

      // Calculate the width/height of each of the supported camera ratios
      // These width/height are measured in landscape mode
      // find the ratio that is closest to the screen ratio without going over
      const distances = {};
      const realRatios = {};
      let minDistance = null;
      for (const ratio of ratios) {
        const parts = ratio.split(":");
        const realRatio = parseInt(parts[0]) / parseInt(parts[1]);
        realRatios[ratio] = realRatio;
        // ratio can't be taller than screen, so we don't want an abs()
        const distance = screenRatio - realRatio;
        distances[ratio] = realRatio;
        if (minDistance == null) {
          minDistance = ratio;
        } else {
          if (distance >= 0 && distance < distances[minDistance]) {
            minDistance = ratio;
          }
        }
      }
      // set the best match
      desiredRatio = minDistance;
      //  calculate the difference between the camera width and the screen height
      const remainder = Math.floor(
        (height - realRatios[desiredRatio] * width) / 2
      );
      // set the preview padding and preview ratio
      setImagePadding(remainder / 2);
      setRatio(desiredRatio);
      // Set a flag so we don't do this
      // calculation each time the screen refreshes
      setIsRatioSet(true);
    }
  };

  const handleFlash = () => {
    switch (flashMode) {
      case "on":
        setFlashMode("auto");
        break;
      case "auto":
        setFlashMode("off");
        break;
      case "off":
        setFlashMode("on");
        break;
    }
  };

  const handleDoubleTap = () => {
    const press = new Date().getTime() - lastPress;
    if (press < 200) {
      // Double tap
      handleFlipCamera();
    } else {
      const lastPress = new Date().getTime();
      setLastPress(lastPress);
    }
  };

  const handleFlipCamera = () => {
    type == Camera.Constants.Type.back
      ? setType(Camera.Constants.Type.front)
      : setType(Camera.Constants.Type.back);
  };

  const setCameraReady = async () => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  if (!isFocused) {
    return <Text>Loading</Text>;
  }

  return (
    <Camera
      style={[styles.camera, { marginBottom: imagePadding * 3 }]} // normally "2" but "3" seems to be the right ratio visually
      ref={(ref) => {
        setCameraRef(ref);
      }}
      onCameraReady={setCameraReady}
      type={type}
      ratio={ratio}
      maxDuration={10000}
      autofocus={Camera.Constants.AutoFocus.on}
      flashMode={Camera.Constants.FlashMode[flashMode]}
      videoStabilizationMode={Camera.Constants.VideoStabilization.auto}
    >
      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <View style={styles.cameraWrapper}>
          <TouchableOpacity
            style={styles.flashIconContainer}
            onPress={handleFlash}
          >
            <MaterialIcons
              size={35}
              name={`flash-${flashMode}`}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={async () => {
              if (cameraRef) {
                const photo = await cameraRef.takePictureAsync();
                console.log("photo", photo);
              }
            }}
          >
            <View style={styles.buttonOuter}>
              <View style={styles.buttonInner}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.libraryIconContainer}>
            <MaterialIcons size={35} name="photo-library" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipIconContainer}
            onPress={handleFlipCamera}
          >
            <MaterialIcons
              size={35}
              name="flip-camera-ios"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Camera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  cameraWrapper: {
    flex: 1,
    backgroundColor: "transparent",
  },
  buttonContainer: {
    marginTop: "auto",
    alignSelf: "center",
    justifyContent: "flex-end",
    marginBottom: 20,
  },
  buttonOuter: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "white",
    height: 80,
    width: 80,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonInner: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "white",
    height: 70,
    width: 70,
    backgroundColor: "white",
  },
  icon: {
    color: "white",
  },
  flipIconContainer: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
  libraryIconContainer: {
    position: "absolute",
    left: 10,
    bottom: 10,
  },
  flashIconContainer: {
    position: "absolute",
    right: 10,
    top: StatusBar.currentHeight + 10,
  },
});

export default SpotliteCamera;
