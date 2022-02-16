import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { gS } from "./Styles";
import Header from "./Header";
import ListItem from "./ListItem";
export default function App() {

  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Eggs' },
    { id: 3, text: 'Bacon' },
    { id: 4, text: 'Beer' },
    { id: 5, text: 'Butter' },
  ])

  return (
    <View style={gS.container}>
      {/* <Text style={gS.text}>Open up App.js to start working on your app!</Text>
      <Image
        source={{uri:'https://randomuser.me/api/portraits/women/1.jpg'}}
        style={gS.img}
      /> */}
      <Header title='Hello from the app.js' />
      {/* <StatusBar style="auto" /> */}
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
      
    </View>
  );
}
