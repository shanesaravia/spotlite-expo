import * as MediaLibrary from "expo-media-library";

import { Asset, AssetsOptions, getAssetsAsync } from "expo-media-library";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Text, useTheme } from "react-native-elements";

import Loading from "components/Loading";
import { MaterialIcons } from "@expo/vector-icons";
import { ThemeType } from "types";
import { useNavigation } from "@react-navigation/core";

const MediaGrid = () => {
  const [hasLibraryPermission, setHasLibraryPermission] = useState<
    null | boolean
  >(null);
  const [assetItems, setAssetItems] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [availableOptions, setAvailableOptions] = useState({
    first: 100,
    totalCount: 0,
    after: "",
    endCursor: "",
    hasNextPage: true,
  });
  const { theme } = useTheme();
  const navigation = useNavigation();

  const columns = 3;
  const { width } = useMemo(() => Dimensions.get("screen"), []);

  useEffect(() => {
    requestLibraryPermission();
  }, []);

  useEffect(() => {
    getAssets();
  }, [hasLibraryPermission]);

  const requestLibraryPermission = async () => {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    setHasLibraryPermission(status === "granted");
  };

  const getAssets = (first: number = 100) => {
    try {
      if (availableOptions.hasNextPage) {
        const params: AssetsOptions = {
          first,
          mediaType: [
            MediaLibrary.MediaType.photo,
            MediaLibrary.MediaType.video,
          ],
          sortBy: ["creationTime"],
        };
        if (availableOptions.after) params.after = availableOptions.after;
        if (!availableOptions.hasNextPage) return;

        return hasLibraryPermission
          ? loadAssets(params)
          : requestLibraryPermission();
      }
    } catch (err) {
      setError("Unable to retrieve media");
    }
  };

  const loadAssets = useCallback(
    async (params: AssetsOptions) => {
      getAssetsAsync(params)
        .then(({ endCursor, assets, hasNextPage }) => {
          if (assets.length <= 0) {
            setLoading(false);
            setError("No media found");
          }
          if (availableOptions.after == endCursor) return;
          setAvailableOptions({
            ...availableOptions,
            after: endCursor,
            hasNextPage: hasNextPage,
          });
          setLoading(false);
          return setAssetItems([...assetItems, ...assets]);
        })
        .catch(() => {
          setLoading(false);
          setError("Error loading media");
        });
    },
    [assetItems]
  );

  const _getItemLayout = (data: Asset[] | null | undefined, index: number) => {
    let length = width / columns;
    return { length, offset: length * index, index };
  };

  const _renderItem = ({ item }: { item: Asset }) => {
    const { mediaType } = item;
    return (
      <TouchableOpacity
        style={styles(undefined, width, columns).imageContainer}
        onPress={() => navigation.navigate("Edit", { media: item })}
      >
        {mediaType === "video" && (
          <MaterialIcons
            style={styles().videoIcon}
            name="videocam"
            color="white"
            size={14}
          />
        )}
        <Image style={styles().image} source={{ uri: item?.uri }} />
      </TouchableOpacity>
    );
  };

  return (
    <>
      {loading ? <Loading /> : null}
      {error && !assetItems ? (
        <Text style={styles(theme).error}>{error}</Text>
      ) : null}
      <FlatList
        data={assetItems}
        numColumns={columns}
        initialNumToRender={50}
        getItemLayout={_getItemLayout}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={() => getAssets()}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

const styles = (theme: ThemeType = {}, width = 0, columns = 0, margin = 1) =>
  StyleSheet.create({
    imageContainer: {
      width: width / columns - margin * 2,
      height: width / columns,
      margin: margin,
    },
    image: {
      width: "100%",
      height: "100%",
    },
    error: {
      color: theme?.colors?.error || "red",
      textAlign: "center",
      marginTop: "50%",
    },
    videoIcon: {
      position: "absolute",
      bottom: 2,
      left: 2,
      zIndex: 1,
      elevation: 1,
    },
  });

export default MediaGrid;
