import React from "react";
import { View, Text } from "react-native";
import { gS } from "./Styles";

const Header = (props) => {
  return (
    <View style={gS.header}>
      <Text style={gS.text}>{props.title}</Text>
    </View>
  )
}

Header.defaultProps = {
  title: 'Shopping List',
  
}

export default Header;