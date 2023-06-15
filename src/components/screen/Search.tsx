import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
// import FlatListDropDown from '../screenComponents/FlatListDropDown';

const Search = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <SearchBox />
        <SearchContent />
      </ScrollView>
    </View>
  );
};

export default Search;
