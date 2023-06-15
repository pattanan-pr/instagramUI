import {View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const SearchContent = () => {
  const searchData = [
    {
      id: 0,
      images: [
        require('../../storage/image/pp.jpg'),
        require('../../storage/image/pp.jpeg'),
        require('../../storage/image/slp.jpeg'),
        require('../../storage/image/cat1.jpeg'),
        require('../../storage/image/asu.jpeg'),
        require('../../storage/image/jap.jpeg'),
      ],
    },
  ];

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        top: 60,
      }}>
      <TouchableOpacity style={{paddingBottom: 2, width: '33%'}}>
        <Image
          source={require('../../storage/image/cat4.jpeg')}
          style={{paddingBottom: 2, width: '100%', height: 150}}
        />
      </TouchableOpacity>
      {/* <Image
        source={require('../../storage/image/cat4.jpeg')}
        style={{paddingBottom: 2, width: '100%', height: 150}}
      />
      <Image
        source={require('../../storage/image/cat4.jpeg')}
        style={{paddingBottom: 2, width: '100%', height: 150}}
      /> */}
    </View>
  );
};

export default SearchContent;
