import React from 'react';
import { View } from 'react-native';

const cardSection = (props) => {
 return (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
 );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    postion: 'relative'
  }
};

export default cardSection;
