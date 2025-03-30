# unit-conversion-app
Units Conversion App

## Creating New Project
npx create-expo-app --template blank UNITProj

## To start the app
nmp run start

## To install Stack Navigation  
npm install @react-navigation/stack

npm install @react-navigation/native react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

## Checks
npx expo-doctor .

npx expo install --check

# Building EAS

eas build:configure

eas build --profile preview --platform ios --local
eas build --profile preview --platform android --local

add the below profile to build section in eas.json
```json
    "preview" : {
      "distribution": "internal", 
      "ios": {
        "simulator": true
      }, 
      "android": {
        "buildType": "apk"
      }
    }, 
```
```sh
npx expo-doctor .
eas build --profile preview
```
