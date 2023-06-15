import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState} from 'react';
import SearchDropDown from './app/component/SearchDropDown';
const SearchBox = () => {
  const [entered, setEntered] = useState(dataSource);
  const [dataSource] = useState([
    'apple',
    'banana',
    'cow',
    'dex',
    'zee',
    'orange',
    'air',
    'bottle',
  ]);
  const [searching, setSearching] = useState(false);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
        top: 60,
      }}>
      <Icon
        name="search1"
        style={{
          fontSize: 18,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        value={entered}
        onChangeText={text => setEntered(text)}
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '94%',
          backgroundColor: '#EBEBEB',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
          height: 40,
        }}
      />
    </View>
  );
};

export default SearchBox;
