const path = require("path");

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],

    files: ["src/tests/**/*.spec.js"],

    preprocessors: {
      "src/tests/**/*.spec.js": ["webpack", "sourcemap"],
    },

    webpack: {
      mode: "development",
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"],
              },
            },
          },
          { test: /\.css$/, use: ["style-loader", "css-loader"] },
          { test: /\.(png|jpg|jpeg|gif|svg)$/i, type: "asset/resource" },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx"],
      },
    },

    reporters: ["progress", "kjhtml"], // 👈 Incluye el reporter visual

    browsers: ["Chrome"], // 👈 No Headless, para abrir ventana real

    plugins: [
      "karma-jasmine",
      "karma-chrome-launcher",
      "karma-webpack",
      "karma-babel-preprocessor",
      "karma-sourcemap-loader",
      "karma-jasmine-html-reporter",
    ],

    client: {
      clearContext: false, // 👈 Deja visible el reporte en navegador
    },

    singleRun: false, // 👈 No se cierra automáticamente
    autoWatch: true, // 👈 Vuelve a correr al guardar
  });
};
