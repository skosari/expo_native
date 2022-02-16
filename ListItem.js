import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gS } from "./Styles";
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={gS.listItem}>
      <View style={gS.listItemView}>
        <Text style={gS.listItemText}>
          {item.text}
        </Text>
        {/* <Icon name='remove' size={20} color='firebrick' /> */}
        <Text>X</Text>
      </View>
    </TouchableOpacity>
  )
};

export default ListItem