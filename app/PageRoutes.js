import React from "react";

import { 
    NavigationContainer,
    getFocusedRouteNameFromRoute,
 } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeView from "./views/HomeView";
import MineView from "./views/MineView";
import FeedScreen from "./views/tabbars/FeedScreen";
import AccountScreen from "./views/tabbars/AccountScreen";

import PlaygroundView from "./views/PlaygroundView"; // 测试路由页面
import ProfileScreen from "./views/ProfileScreen"; 
import SettingsScreen from "./views/SettingsScreen";
import DraggableFlatlistView from "./views/DraggableFlatlistView";
// tabbar icon
import TabIcon from "./views/tabbars/TabIcon";

// 设置Tabbar顶部标题参考
// https://reactnavigation.org/docs/screen-options-resolution/#setting-parent-screen-options-based-on-child-navigators-state
function getHeaderTitle(route) {
    // 获取路由名字
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

    switch (routeName) {
      case 'Feed':
        return 'Feed';
      case 'Profile':
        return 'Profile';
      case 'Account':
        return 'Account';
    }
  }


/// 底部导航栏
const BottomTabs = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({})=>({
                headerShown: false,
                tabBarActiveTintColor: '#e91e63',
            })}
        >
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                    title: 'Feed',
                    tabBarBadge: 3,
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <TabIcon
                            source={require('./res/IMG_6932.jpg')}
                            ></TabIcon>
                        )
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <TabIcon
                            source={require('./res/IMG_6932.jpg')}
                            ></TabIcon>
                        )
                    },
                }}
            ></Tab.Screen>
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    title: 'Account',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <TabIcon
                            source={require('./res/IMG_6932.jpg')}
                            ></TabIcon>
                        )
                    },
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
                    // screenOptions={({route})=>({
                    //     // console.log("" + route)
                    // })}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
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