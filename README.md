# Basic Webpack CLI Project

Basic Webpack Project Setup using Webpack CLI tools.

## Building and running on localhost cloning this repo.

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a development build:

```sh
npm run build-dev
```

To create a production build:

```sh
npm run build-prod
```

### Running

Open the file `public/index.html` in your browser


## Basic setup from scratch

First let's create a directory, initialize npm, install webpack locally, and install the webpack-cli (the tool used to run webpack on the command line):

```bash
mkdir webpack-demo
cd webpack-demo
npm init -y
npm i -D webpack webpack-cli
npm i -D webpack-dev-server html-webpack-plugin
npm i -D style-loader css-loader sass-loader sass
npm i -D babel-loader @babel/core @babel/preset-env
npm i lodash moment
```

*project structure*

```bash
webpack-demo
|- /node_modules
|- /src
  |- index.html
  |- main.js
  |- component.js
  |- styles.scss
  |- _config.scss
  |- logo.svg
|- package.json
|- package-lock.json
|- webpack.config.js
```


*package.json*

```json
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "Getting Started Project",
  "private": true,
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve",
    "clean": "rm -fr public"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "lodash": "^4.17.21",
    "moment": "^2.29.4"
  },
  "devDependencies": {
    "webpack": "^5.88.1",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1",
    "html-webpack-plugin": "^5.5.3",
    "style-loader": "^3.3.3",
    "css-loader": "^6.8.1",
    "sass-loader": "^13.3.2",
    "sass": "^1.63.6",
    "babel-loader": "^9.1.3",
    "@babel/core": "^7.22.9",
    "@babel/preset-env": "^7.22.9"
  }
}
```

*src/main.js*

```javascript
import _ from "lodash";
import component from "./component.js";
import "./styles.scss";

const p = document.createElement("p");
p.innerText = _.join(["Hello,", "webpack"], " ");

document.body.appendChild(component(p));
```

*src/component.js*

```javascript
import logo from "./logo.svg";

function component(child) {
  const main = document.createElement("main");
  const img = document.createElement("img");

  img.src = logo;
  img.alt = "Logo";

  main.appendChild(img);
  main.appendChild(child);

  return main;
}

export default component;
```

*src/_config.scss*
```scss
@font-face {
  font-family: BalooDa2-Regular;
  src: url("./fonts/BalooDa2-Regular.ttf");
}
@font-face {
  font-family: BalooDa2-Medium;
  src: url("./fonts/BalooDa2-Medium.ttf");
}
@font-face {
  font-family: BalooDa2-Bold;
  src: url("./fonts/BalooDa2-Bold.ttf");
}

$color-Dark: #20232a;
$color-Light: #fffeee;
$color-Accent: #06bcee;
$color-Primary: #61dafb;
$color-Secondary: #282c34;
$font-Bold: BalooDa2-Bold;
$font-Medium: BalooDa2-Medium;
$font-Regular: BalooDa2-Regular;
```

*src/styles.scss*
```scss
@import "config";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-Regular;
  font-weight: 400;
}

body {
  margin: 0;
  font-family: $font-Regular;
  background-color: $color-Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  a.link {
    color: $color-Accent;
  }
}
```

*src/index.html*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#fffeee" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#fffeee" />
    <meta name="msapplication-TileImage" href="manifest-icon-512.png" />
    <meta name="msapplication-TileColor" content="#fffeee" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" type="image/svg" href="./logo.svg" />
    <link rel="mask-icon" href="manifest-icon-512.png" color="#fffeee" />
    <link rel="apple-touch-icon" href="manifest-icon-512.png" />
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
      <h1><%= htmlWebpackPlugin.options.title %></h1>
  </body>
</html>
```


*webpack.config.js*

```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development", // production
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js", // contenthash
    assetModuleFilename: "[name][ext]",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    // contentBase: path.resolve(__dirname, "dist"),
    // watchContentBase: true,
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|svg|png|jpg|jpeg|webp|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "defaults",
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Demo Project",
      filename: "index.html",
      template: path.resolve(__dirname, "./src/index.html"),
    }),
  ],
};
```

### Warning

Do not compile untrusted code with webpack. It could lead to execution of malicious code on your computer, remote servers, or in the Web browsers of the end users of your application.

If you want to learn more about webpack's design, you can check out the basic concepts and configuration pages. Furthermore, the API section digs into the various interfaces webpack offers.


## Credits

Made with [SarbaNanda Bhikkhu](https://github.com/sarbanandabhikkhu)

