import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from "./views/HomeView";
import MineView from "./views/MineView";
import FeedScreen from "./views/FeedScreen";
import AccountScreen from "./views/AccountScreen";

import PlaygroundView from "./views/PlaygroundView"; // 测试路由页面
import ProfileScreen from "./views/ProfileScreen"; 
import SettingsScreen from "./views/SettingsScreen";
import DraggableFlatlistView from "./views/DraggableFlatlistView";

import { Image } from "react-native";  


/// 底部导航栏
const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            // screenOptions={{
            //     headerShown: false,
            //     tabBarActiveTintColor: '#e91e63',
            // }}

            screenOptions={({})=>({
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
            })}
        >
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    // title: 'Feed',
                    tabBarLabel: 'Feed', // tabbar名字
                    tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Image
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                                source={require('./res/IMG_6932.jpg')} // 设置图片
                            ></Image>
                        )
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Account',
                }}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}


const PageRoutes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: '#FFFFFF', // 标题颜色
                    headerBackTitleVisible: false, // 返回按键文字不可见
                    headerStyle: {
                        backgroundColor: '#01246E',
                    }
                }}
            >
                <Stack.Screen
                    // 底部导航栏
                    name="Home"
                    component={BottomTabs}
                    screenOptions={({route})=>({
                        // console.log("" + route)
                    })}
                ></Stack.Screen>

                {/* 其他路由页面 */}
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                ></Stack.Screen>
                {/* MineView */}
                <Stack.Screen
                    name="MineView"
                    component={MineView}
                ></Stack.Screen>
                {/* PlaygroundView */}
                <Stack.Screen
                    name="PlaygroundView"
                    component={PlaygroundView}
                ></Stack.Screen>

                {/* HomeView */}
                <Stack.Screen
                    name="HomeView"
                    component={HomeView}
                ></Stack.Screen>

                <Stack.Screen
                    name="DraggableFlatlistView"
                    component={DraggableFlatlistView}
                ></Stack.Screen>


            </Stack.Navigator>
        </NavigationContainer>
    )
}



export default PageRoutes;