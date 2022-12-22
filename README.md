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

安裝 React Native  
npm install -g react-native  
安裝 watchman  
npm install watchman -g  
安裝 flow  
npm install flow -g  
安裝 React Native command line 工具  
npm install -g react-native-cli

建立新專案  
npx react-native init NameOfTheProject

執行 APP  
npx react-native run-android

Setup for ESlint  
install ESLint Package: npm install -g eslint
initial ESLint: eslint --init
install Prettier ESlint VSCode Extension
install Prettier ESLint package: npm install prettier prettier-eslint --save-dev
click crtl+shipt+P, and type format document..., select Prettier ESLint
click crtl+Alt+L in each file

//use this commend to disable crlf in the PC:
git config --global core.autocrlf false

Install packages for react-native-navigation
npm install @react-navigation/native-stack
npm install --save react-native-gesture-handler react-native-reanimated react-native-screens
