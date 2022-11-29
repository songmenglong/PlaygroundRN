import React from "react";
import { View , Text} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeView= ({navigation}) => {
    return (
        <View
            style={{
                // backgroundColor: 'red',
                flex: 1,
                justifyContent: 'center',
                alignItems:'center',
            }}
        >
            <Text>{"Home"}</Text>
            <TouchableOpacity
                onPress={() => {
                    // 智能家居页面？
                    navigation.navigate("")
                }}
            >
                <Text>{"智能家居"}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HomeView;