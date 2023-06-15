import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Botton = ({colorBtn, text, onpress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colorBtn,
          padding: 10,
          width: 380,
          borderRadius: 15,
          height: 50,
        }} onPress={onpress}>
        <Text style={{color: '#fff', fontWeight: '600', fontSize: 20}}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Botton;
