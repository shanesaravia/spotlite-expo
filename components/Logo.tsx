import React from "react";
import { Image, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import spotliteLogoDark from "../assets/images/spotlite-logo-dark.png";
import spotliteLogoLight from "../assets/images/spotlite-logo-light.png";

interface Props {
  width: number;
}

const Logo = ({ width }: Props): JSX.Element => {
  const themeType = useSelector((state) => state.theme);
  const image = themeType === "dark" ? spotliteLogoDark : spotliteLogoLight;

  return <Image source={image} style={{ ...styles.logo, width: width }} />;
};

const styles = StyleSheet.create({
  logo: {
    marginLeft: 10,
    marginBottom: -10,
    flex: 1,
    resizeMode: "contain",
  },
});

Logo.defaultProps = {
  width: 120,
};

export default Logo;
