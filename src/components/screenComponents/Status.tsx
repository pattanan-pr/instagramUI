/* eslint-disable react/self-closing-comp */
import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;
  return (
    <View
      style={{
        backgroundColor: '#000',
        height: '100%',
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <StatusBar backgroundColor="black" barStyle="light-content"></StatusBar>
      <View
        style={{
          height: 4,
          width: '95%',
          backgroundColor: '#ccc',
          top: 68,
          position: 'absolute',
          borderWidth: 1,
        }}></View>
      <View
        style={{
          borderRadius: 100,
          width: 30,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={{
            resizeMode: 'cover',
            width: '92%',
            height: '92%',
            borderRadius: 100,
            backgroundColor: 'orange',
          }}
        />
      </View>
    </View>
  );
};

export default Status;
