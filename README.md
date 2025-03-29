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

# Graph Data Structure
Graph data structure is the code from the https://github.com/datavis-tech/graph-data-structure

It is compiled into js using the below commands

```sh
git clone git@github.com:datavis-tech/graph-data-structure.git
cd graph-data-structure
npm install
mv tsconfig.json tsconfig_old.json
npx tsc --init
npx tsc --outDir ./build
cp build ../unit-conversion-app/src/graph-data-structure
```

# Building EAS

eas build:configure

eas build --profile preview

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
