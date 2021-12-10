import MediaGrid from "components/Media/MediaGrid";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";

const SelectMediaScreen = (): JSX.Element => {
  return (
    <>
      <Text h1 style={styles.title}>
        Gallery
      </Text>
      <MediaGrid />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 100,
    alignSelf: "center",
  },
});

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
// <Text h1 style={styles.title}>
//   Gallery
// </Text>
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
// container: {
//   flex: 1,
// },
// gridContainer: {
//   flexDirection: "row",
//   flexWrap: "wrap",
// },
// gridItem: {
//   height: 100,
//   width: "32.5%",
//   margin: "0.4%",
// },
// gridImage: {
//   height: "100%",
//   width: "100%",
// },
// });

// export default SelectMediaScreen;
