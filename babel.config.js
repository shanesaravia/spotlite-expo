module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            assets: "./assets",
            components: "./components",
            navigation: "./navigation",
            screens: "./screens",
            store: "./store",
            actions: "./store/actions",
            reducers: "./store/reducers",
            hooks: "./hooks",
            configs: "./configs",
            utils: "./utils",
          },
        },
      ],
    ],
  };
};
