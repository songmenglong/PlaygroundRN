import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


function AccountScreen({navigation}) {
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
            navigation.navigate('DraggableFlatlistView')
          }}
        >
          <Text>{"点击账户，点击图片"}</Text>
        </TouchableOpacity>
      </View>
    )
}

export default AccountScreen;