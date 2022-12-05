import React from "react";
import { View } from "react-native"
// import { 
//     NestableScrollContainer,
//     NestableDraggableFlatList,
//     ScaleDecorator,
//     RenderItemParams,
//  } from "react-native-draggable-flatlist";


const DraggableFlatlistView = () => {
    return (
        <View>
        </View>
    )
}


// import React, { useState } from 'react';
// import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
// import {
//   NestableScrollContainer,
//   NestableDraggableFlatList,
//   ScaleDecorator,
//   RenderItemParams,
// } from 'react-native-draggable-flatlist';

// // import { mapIndexToData, Item } from '../utils';

// function getColor(i, numItems) {
//     const multiplier = 255 / (numItems - 1);
//     const colorVal = i * multiplier;
//     return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
// }

// const getRandColorVal = () => Math.floor(Math.random() * 255);

// const mapIndexToData = (d, index, arr) => {
//     const backgroundColor = getColor(index, arr.length);
//     return {
//         text: `${index}`,
//         key: `key-${backgroundColor}`,
//         backgroundColor,
//     };
// }

// type Item = ReturnType<typeof mapIndexToData>;


// const NUM_ITEMS = 5;


// const initialData1 = [...Array(NUM_ITEMS)].map(mapIndexToData);
// const initialData2 = [...Array(NUM_ITEMS)].map(mapIndexToData);
// const initialData3 = [...Array(NUM_ITEMS)].map(mapIndexToData);

// /// 当前要显示的内容
// function DraggableFlatlistView() {
//   const [data1, setData1] = useState(initialData1);
//   const [data2, setData2] = useState(initialData1);
//   const [data3, setData3] = useState(initialData1);

//   const renderItem = ({ item, drag, isActive }) => {
//     return (
//       <ScaleDecorator>
//         <TouchableOpacity
//           activeOpacity={1}
//           onLongPress={drag}
//           disabled={isActive}
//           style={[
//             styles.rowItem,
//             { backgroundColor: isActive ? 'red' : item.backgroundColor },
//           ]}>
//           <Text style={styles.text}>{item.text}</Text>
//         </TouchableOpacity>
//       </ScaleDecorator>
//     );
//   };

//   const keyExtractor = (item) => item.key;

//   return (
//     <NestableScrollContainer style={{ backgroundColor: 'seashell' }}>
//       <Header text={'List 1'} />
//       <NestableDraggableFlatList
//         data={data1}
//         onDragEnd={({ data }) => setData1(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//       <Header text={'List 2'} />
//       <NestableDraggableFlatList
//         data={data2}
//         onDragEnd={({ data }) => setData2(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//       <Header text={'List 3'} />
//       <NestableDraggableFlatList
//         data={data3}
//         onDragEnd={({ data }) => setData3(data)}
//         keyExtractor={keyExtractor}
//         renderItem={renderItem}
//       />
//     </NestableScrollContainer>
//   );
// }

// function Header({ text }: { text: "" }) {
//   return (
//     <View>
//       <Text
//         style={{
//           fontSize: 24,
//           fontWeight: 'bold',
//           padding: 24,
//           color: '#555',
//         }}>
//         {text}
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   rowItem: {
//     height: 100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });


export default DraggableFlatlistView;