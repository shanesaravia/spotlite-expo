// import * as MediaLibrary from "expo-media-library";
import {
  Asset,
  AssetsOptions,
  getAssetInfoAsync,
  getAssetsAsync,
} from "expo-media-library";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { SaveFormat, manipulateAsync } from "expo-image-manipulator";

import Loading from "components/Loading";
import { Text } from "react-native-elements";

const SelectMediaScreen = (): JSX.Element => {
  const [assetItems, setAssetItems] = useState<Asset[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [options, setOptions] = useState({
    first: 100,
    totalCount: 0,
    after: "",
    endCursor: "",
    hasNextPage: true,
  });

  const columns = 3;
  // const screen = (width * Styles.widgetWidth) / 100;
  // const screen = Dimensions.get("screen");
  const { width, height } = useMemo(() => Dimensions.get("screen"), []);

  const loadAssets = useCallback(
    async (params: AssetsOptions) => {
      getAssetsAsync(params)
        .then(({ endCursor, assets, hasNextPage }) => {
          if (assets.length <= 0) {
            setLoading(false);
            setError("No media found");
          }
          if (options.after == endCursor) return;
          setOptions({
            ...options,
            after: endCursor,
            hasNextPage: hasNextPage,
          });
          setLoading(false);
          return setAssetItems([...assetItems, ...assets]);
        })
        .catch(() => {
          setLoading(false);
          setError("Error loading");
        });
    },
    [assetItems]
  );

  const _getItemLayout = (data: Asset[] | null | undefined, index: number) => {
    let length = width / columns;
    return { length, offset: length * index, index };
  };

  const _renderItem = ({ item }: { item: Asset }) => (
    <MemoizedAssetItem
      id={item.id}
      image={item.uri}
      mediaType={item.mediaType}
      selectedIndex={selectedItems.indexOf(item.id)}
      onClick={onClick}
      cols={cols}
      screen={screen}
      margin={margin}
      selectedIcon={selectedIcon}
      videoIcon={videoIcon}
    />
  );

  return (
    <FlatList
      data={assetItems}
      numColumns={columns}
      initialNumToRender={50}
      getItemLayout={_getItemLayout}
      renderItem={_renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={() => getMoreAssets()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SelectMediaScreen;

// const INITIAL_LOAD = 10;

// const SelectMediaScreen = (): JSX.Element => {
//   const [assets, setAssets] = useState<any[]>([]);
//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     MediaLibrary.getAssetsAsync({
//       mediaType: [MediaLibrary.MediaType.photo, MediaLibrary.MediaType.video],
//       first: INITIAL_LOAD,
//       sortBy: ["creationTime"],
//     }).then(async (data) => {
//       let compressedAssets: any = [];
//       // console.log("data assets: ", typeof data.assets);
//       // console.log("data assets: ", data.assets);
//       await data.assets.forEach(async (asset) => {
//         const compressedAsset = await manipulateAsync(
//           asset.uri,
//           [{ resize: { width: 200 } }],
//           {
//             compress: 1,
//             format: SaveFormat.PNG,
//           }
//         );
//         // console.log("compressedAsset: ", compressedAsset);
//         compressedAssets.push(compressedAsset);
//         // console.log("compressed asset list: ", compressedAssets);
//       });
//       console.log("compressed LIST: ", typeof compressedAssets);
//       console.log("compressed LIST: ", compressedAssets);
//       setAssets(compressedAssets);
//       // setAssets(data.assets);
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* {!loaded ? <Loading /> : null} */}
//       <ScrollView>
//         <Text h1 style={styles.title}>
//           Gallery
//         </Text>
//         <View style={styles.gridContainer}>
//           {assets.map((asset, idx) => {
//             console.log("asset: ", asset);
//             return (
//               <TouchableOpacity key={idx} style={styles.gridItem}>
//                 <Image
//                   source={{ uri: asset?.uri }}
//                   resizeMode="cover"
//                   style={styles.gridImage}
//                   // onLoadEnd={() => setLoaded(true)}
//                 />
//               </TouchableOpacity>
//             );
//           })}
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     marginVertical: 100,
//     alignSelf: "center",
//   },
//   container: {
//     flex: 1,
//   },
//   gridContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//   },
//   gridItem: {
//     height: 100,
//     width: "32.5%",
//     margin: "0.4%",
//   },
//   gridImage: {
//     height: "100%",
//     width: "100%",
//   },
// });

// export default SelectMediaScreen;
