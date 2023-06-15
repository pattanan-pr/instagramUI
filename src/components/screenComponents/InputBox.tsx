import {View, TouchableOpacity, Image, TextInput, Text} from 'react-native';
import React, {useState} from 'react';

const InputBox = ({textholder, value}) => {
  const [enteredName, setEnteredName] = useState('');

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: 380,
        borderRadius: 15,
        height: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: 15,
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <TextInput
          placeholder={textholder}
          value={enteredName}
          onChangeText={text => setEnteredName(text)}
          style={{
            width: '100%',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 15,
            padding: 4,
            paddingLeft: 40,
            height: 40,
          }}
        />
        {/* <TouchableOpacity> */}
          <Text>{value}</Text>
        {/* </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default InputBox;
