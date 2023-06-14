/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';
import Inputmessage from './Inputmessage';

const Status = ({route, navigation}) => {
  const {name} = route.params;
  const {image} = route.params;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

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
      {/* this is the white line above user icon */}
      <View
        style={{
          height: 4,
          width: '95%',
          backgroundColor: '#ccc',
          top: 68,
          position: 'absolute',
          borderWidth: 1,
        }}></View>
      {/* this is image user icon adjusting */}
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          position: 'absolute',
          top: 70,
          left: 0,
          width: '90%',
        }}>
        <View
          style={{
            borderRadius: 100,
            width: 40,
            height: 40,
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
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text style={{color: '#fff', fontSize: 15, paddingLeft: 10}}>
            {name}
            {'  '}
            <Text style={{color: '#ccc', fontSize: 15, paddingLeft: 10}}>
              14h
            </Text>
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="close"
              style={{fontSize: 20, color: 'white', opacity: 0.6}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={image}
        style={{position: 'absolute', width: '100%', height: 650}}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 50,
          left: 0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginVertical: 10,
          width: '100%',
          paddingHorizontal: 10,
        }}>
        <Inputmessage />
        <Icon name={'hearto'} size={26} color={'white'} />
        <Icons name={'send'} size={26} color={'white'} />
      </View>
    </View>
  );
};

export default Status;
