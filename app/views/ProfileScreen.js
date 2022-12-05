import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const ProfileScreen = ({ navigation }) => {

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: "Profile",
  //   })
  // }, [navigation]);

  React.useEffect(() => {
    navigation.setOptions({
      // title: value === '' ? 'No title' : value,
      title: "Profile",
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DraggableFlatlistView');
        }}
      >
        <Text>{"DraggableFlatlistView"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen;