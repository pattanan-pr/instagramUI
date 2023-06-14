import {View, Text, StatusBar, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import Story from '../screenComponents/Story';
import Post from '../screenComponents/Post';
// import * from 'react-native-vector-icons/Lobster-Regular;

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
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingTop: 50,
            paddingLeft: 20,
            height:100,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '500',
            }}>
            Instagram
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingEnd: 20,
              width: 100,
              justifyContent: 'space-between',
            }}>
            <Icon name={'hearto'} size={30} color={'#737373'} />
            <Icon name={'message1'} size={30} color={'#737373'} />
          </View>
        </View>
        <ScrollView>
          <Story />
          <Post />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;
