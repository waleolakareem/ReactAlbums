// Import Libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = () => {
  const { textStyle } = styles;
  return (
    <View>
      <Text style={textStyle}> Albums! </Text>
    </View>
    );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
};
// Make the component available to other parts of the app
export default Header;
