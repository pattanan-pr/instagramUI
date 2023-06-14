import {TextInput} from 'react-native';
import React from 'react';

const Inputmessage = () => {
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
      }}
    />
  );
};

export default Inputmessage;
