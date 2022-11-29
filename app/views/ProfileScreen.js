import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const ProfileScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DraggableFlatlistView')
        }}
      >
        <Text>{"DraggableFlatlistView"}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfileScreen;