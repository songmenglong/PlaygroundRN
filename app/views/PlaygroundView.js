import React, { useRef, useState } from "react";
import Svg, { Rect, G, Polygon, Path, } from "react-native-svg";

import {
    Image,
    View, ScrollView,
    Text, StyleSheet, TouchableOpacity, PanResponder
} from 'react-native';

import {
    Dimensions,
    Animated
} from 'react-native';

const {
    height: deviceHeight,
    width: deviceWidth
} = Dimensions.get('window');


const PlaygroundView = () => {
    return (
        <View style={{flex: 1}}>
            
            {/* <DragSquare>                
            </DragSquare> */}

            {/* <FunDragSquare>                
            </FunDragSquare> */}

            {/* <DeviceDrag>                
            </DeviceDrag> */}

            <SvgItemMove>                
            </SvgItemMove>
        </View>
    )
}


const FunDragSquare = () => {

    const [animatedValue, setAnimatedValue] = Animated.ValueXY()
    const [value, setValue] = {x: 0, y: 0}

    return (
        <View
            style={estyles.container}
        >
            <Animated.View
                style={[
                    estyles.box,
                    {
                        backgroundColor: 'red'
                    }
            ]}
            >
            </Animated.View>
        </View>
    )
}


/// 官网给的PanResponder动画代码
const DeviceDrag = () => {
    const pan = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y }
            ]),
            onPanResponderRelease: () => {
                Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();
            }
        })
    ).current;

    return (
        <View style={anistyles.container}>
            <Text style={anistyles.titleText}>Drag & Release this box!</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }]
                }}
                {...panResponder.panHandlers}
            >
                <View style={anistyles.box} />
            </Animated.View>
        </View>
    );
}

const anistyles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
});



const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);
const AnimatedG = Animated.createAnimatedComponent(G);

/// SVG相关代码
const SvgItemMove = () => {

    // item信息    
    const [item, setItem] = useState({"points":{"x":62.89,"y":240.31},"rotate":90,"type":"A","scale":1,"color":"#0CC5E3","index":0})

    const l = (77.89 - 28.44) 

    const getItemPoints = (item) => {
        const points = item.points
        const a = item.scale; 
        if (item.type !== 'D') { 
            switch (item.rotate) {
                case 0:
                    return [
                        [points.x, points.y],
                        [points.x - a * l, points.y + a * l],
                        [points.x + a * l, points.y + a * l]
                    ]
                case 90:
                    return [
                        [points.x, points.y],
                        [points.x - a * l, points.y - a * l],
                        [points.x - a * l, points.y + a * l]
                    ]
                case 180:
                    return [
                        [points.x, points.y],
                        [points.x - a * l, points.y - a * l],
                        [points.x + a * l, points.y - a * l]
                    ]
                case 270:
                    return [
                        [points.x, points.y],
                        [points.x + a * l, points.y - a * l],
                        [points.x + a * l, points.y + a * l]
                    ]
                default:
                    return [
                        [points.x, points.y],
                        [points.x - a * l, points.y + a * l],
                        [points.x + a * l, points.y + a * l]
                    ]
            }
        } else {
            return [
                [points.x, points.y - a * l],
                [points.x - a * l, points.y],
                [points.x, points.y + a * l],
                [points.x + a * l, points.y]
            ]
        }
    }

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            // 设置初始位置
            onPanResponderGrant: (e, gestureState) => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
                pan.setValue({ x: 0, y: 0 });
            },

            /// 获取手势，限定滑动范围
            onPanResponderMove: Animated.event([
                null,
                { dx: pan.x, dy: pan.y }
            ]),


            onPanResponderRelease: () => {
                console.log("手势响应结束？" + JSON.stringify(pan))

                const tempItem = item
                // tempItem.points = {"x":62.89,"y":240.31}

                /**
                 * 问题描述，直接使用PanResponder手势，参考官网给View一些动画是正常的,如组件DeviceDrag。https://reactnative.cn/docs/animations
                 * 但我们是要给一些图形(正方形、三角形)手势及拖拽移动效果，如svg画出的三角形，当前代码所绘制的便是三角形
                 * 当前问题是：添加手势会有响应，但无法给予拖拽移动
                 */
                tempItem.points = {"x":pan.x,"y":pan.y}
                setItem(tempItem)

                console.log("手势响应结束坐标值?？" + JSON.stringify(item))

                // Animated.spring(pan, { toValue: { x: 0, y: 0 } }).start();            
                pan.flattenOffset();
            }
        })
    ).current;


    return (
        <View style={anistyles.container}>
            <Text style={anistyles.titleText}>Drag & Release this box!</Text>
            <Svg
                width={deviceWidth}
                height={deviceHeight}
            >
                <AnimatedG
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: pan.y }]
                    }}
                    {...panResponder.panHandlers}
                    
                    onLayout={({nativeEvent: e})=>{
                        console.log("AnimatedG onLayout >>> " + JSON.stringify(e))
                    }}

                >
                    <AnimatedPolygon
                        // style={{
                        //     transform: [{ translateX: pan.x }, { translateY: pan.y }]
                        // }}
                        // {...panResponder.panHandlers}
                        points={getItemPoints(item).map(_ => `${_[0]},${_[1]}`).join(' ')}
                        stroke={"black"} // 边线颜色
                        strokeWidth="2"
                        fill={"white"}

                        onLayout={({nativeEvent: e})=>{
                            console.log("AnimatedPolygon onLayout >>>> " + JSON.stringify(e))
                        }}
                    >
                    </AnimatedPolygon>
                </AnimatedG>
            </Svg>
        </View>
    )
}


class DragSquare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0)
        }
    }

    componentWillMount() {
        this._animatedValue = new Animated.ValueXY();
        this._value = {x: 0, y: 0};
        this._animatedValue.addListener((value) => this._value = value);

        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (e, gestureState) => {
                this._animatedValue.setOffset({x: this._value.x, y: this._value.y});
            },
            onPanResponderMove: Animated.event([
                null, {dx: this._animatedValue.x, dy: this._animatedValue.y}
            ]),
            onPanResponderRelease: () => {
                this._animatedValue.flattenOffset();
            }
        });
    }

    componentDidMount() {

    }

    render() {
        let interpolatedColor = this._animatedValue.y.interpolate({
            inputRange: [0, deviceHeight - 100],
            outputRange: ['rgba(229, 27, 66, 1)', 'rgba(90, 146, 253, 1)'],
            extrapolate: 'clamp'
        });
        let interpolatedRotation = this._animatedValue.x.interpolate({
            inputRange: [0, deviceWidth/2, deviceHeight],
            outputRange: ['-360deg', '0deg', '360deg']
        });
        return (
            <View style={estyles.container}>
                <Animated.View style={[
                    estyles.box,
                    {
                        transform: [
                            {translateX: this._animatedValue.x},
                            {translateY: this._animatedValue.y},
                            // {rotate: interpolatedRotation}
                        ],
                        backgroundColor: interpolatedColor
                    }
                ]} 
                {...this._panResponder.panHandlers}
                />
            </View>
        );
    }
}

const estyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    height: 100,
  }
});

export default PlaygroundView;
