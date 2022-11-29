/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import PageRoutes from './app/PageRoutes';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


// AppRegistry.registerComponent(appName, () => PageRoutes);


// 消除黄色警告
console.ignoredYellowBox = [
    'Warning: BackAndroid is deprecated. Please use BackHandler instead.',
    'source.uri should not be an empty string',
    'Invalid props.style key',
]

console.disableYellowBox = true;
