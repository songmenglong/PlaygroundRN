import React from "react";
import { View, Button } from "react-native";
import { TouchableOpacity, Text } from "react-native";

function FeedScreen({ navigation }) {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            // title: 'Name'
            // headerTitle: 'SASAS', // 设置无效
        })
    }, [navigation]);

    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Settings')
                }}
            >
                <Text>{"Settings"}</Text>
            </TouchableOpacity>
        </View>
    );
  }


  export default FeedScreen;