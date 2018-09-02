import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
 const { textStyle, viewStyle } = styles;

return (
  <View style={viewStyle}>
   <Text style={textStyle}>{props.headerText}</Text>
  </View>
);
};

const styles = {
  textStyle: {
  fontSize: 40,
  color: '#fff'
},
  viewStyle: {
  backgroundColor: 'grey',
  justifyContent: 'center',
  alignItems: 'center',
  height: 60,
  paddingTop: 15,
  shadowColor: 'black',
  shadowOffset: { width: 0, height: 40 },
  shadowOpacity: 0.8,
  elevation: 30,
  position: 'relative'
  }
};

export default Header;
