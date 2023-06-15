import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Botton from '../screenComponents/Botton';
import InputBox from '../screenComponents/InputBox';

const Activity = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Botton
        colorBtn={'pink'}
        text={'Hello world'}
        onpress={() => {
          console.log('scsw');
        }}
      />
      <InputBox textholder={'select your choice'} value={'bath'} />
    </View>
  );
};

export default Activity;
