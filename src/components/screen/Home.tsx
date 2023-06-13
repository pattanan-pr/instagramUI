import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <View>
      <StatusBar
        backgroundColor="white"
        barStyle={'dark-content'}
        animated={true}
      />
      <View>
        <FontAwesome name="plus-square-o" style={{fontsize: 24}} />
        <Text
          style={{
            fontSize: 48,
            fontWeight: '500',
          }}>
          Instagram
        </Text>
      </View>
    </View>
  );
};

export default Home;
