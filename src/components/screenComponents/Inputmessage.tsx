import {TextInput} from 'react-native';
import React, { useState } from 'react';

const Inputmessage = (prop) => {
  const [value, onChangeText] = useState('Useless Multiline Placeholder');
  console.log(value)
  return (
    <TextInput
      placeholder="send message"
      placeholderTextColor="white"
      style={{
        borderColor: 'white',
        borderRadius: 25,
        width: '70%',
        height: 50,
        paddingLeft: 20,
        borderWidth: 1,
        fontSize: 20,
        color: 'white',
        value: value,
      }}
    />
  );
};

export default Inputmessage;
