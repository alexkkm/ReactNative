# Configuration of Running the App:

## Setup before cloning

安裝 Node.js
安裝 Java JDK  
安裝 Android Studio

新增環境變數:

1. ANDROID_HOME  
   C:\Users\user\AppData\Local\Android\Sdk
2. JAVA_HOME  
   C:\Program Files\Java\jdk-17.0.5
3. Path  
   C:\Users\user\AppData\Local\Android\Sdk\build-tools  
   %ANDROID_SDK_ROOT%\platform-tools  
   %ANDROID_SDK_ROOT%\emulator  
   %ANDROID_SDK_ROOT%\tools  
   %ANDROID_SDK_ROOT%\tools\bin

## Package Installation:

### Install basic packages for creating demo project:

Packages:  
react-native,
watchman,
flow,
react-native-command-line-tool

Commands for installing above packages:

```
npm install -g react-native watchman flow react-native-cli
```

<code>-g stands for globally install</code>

### Additional packages for new features after demo app (Must be installed to run the dev):

Packages:  
react-native-community
react-native-gesture-handler,
react-native-reanimated,
react-native-screens,
react-native-safe-area-context,
react-navigation,

Commands for installing above packages:

```
npm install @react-navigation/native-stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
```

npm install
react-native-community
react-native-gesture-handler
react-navigation
react-native-reanimated
react-native-screens
react-native-safe-area-context

## Recommended to edit .eslintrc.js to disable annoying notification in vscode:

Edit .eslintrc.js with followings:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'plugin:react/recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': 0, //to prevent the message of 'xxx' is missing in props validation
    'react/no-unescaped-entities': 'off', //to prevent the message of `'` can be escaped with`&apos;`,...
  },
};
```

## Useful Commands:

Commands for creating new application project:

```
npx react-native init NameOfTheProject
```

Run the APP:

```
npx react-native run-android
```

## Optional, but recommend use Eslint to format your code

Setup for ESlint:
install ESLint Package:

```
npm install -g eslint
```

initial ESLint:

```
eslint --init
```

install Prettier ESlint VSCode Extension:  
Click Extension module in VSCode  
install Prettier ESLint package:

```
npm install prettier prettier-eslint --save-dev
```

How to fomatting the file:  
click crtl+shipt+P, and type format document..., select Prettier ESLint  
OR click crtl+Alt+L in each file

//Use this commend to disable crlf in the PC:

```
git config --global core.autocrlf false
```
