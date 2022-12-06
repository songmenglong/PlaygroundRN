import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Image } from "react-native";
import res from "../res";
import { PanResponder, Animated } from "react-native";

const SettingsScreen = ({ navigation }) => {

  const pan = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),

      onPanResponderRelease: (event, gestureState) => {
        console.log("locationX: " + event.nativeEvent.locationX)
        console.log("locationY: " + event.nativeEvent.locationY)
      }
    })
  ).current;
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      // position: 'absolute',
    }}>
      <Text
        style={{

        }}
      >Settings!</Text>
      <Image
        {...panResponder.panHandlers}
        source={res.code}
        style={{
          width: '100%',
          height: '100%',
          // justifyContent: 'center',
          // alignSelf: 'ceter',
        }}
      ></Image>
    </View>
    );
  }

  export default SettingsScreen;