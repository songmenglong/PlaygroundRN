import React from "react";
import { View, Text } from "react-native";

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        {/* <Image
          style={{
            width: 200,
            height: 300,
          }}
          source={require('./app/res/IMG_6932.jpg')}
        ></Image> */}
      </View>
    );
  }

  export default HomeScreen;