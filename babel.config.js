module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            styles: "./src/components/global/styles",
            components: "./src/components",
            reducers: "./src/reducers",
            screens: "./src/screens",
            types: "./src/types",
            store: "./src/app",
            assets: "./assets",
            data: "./data",
          },
        },
      ],
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
