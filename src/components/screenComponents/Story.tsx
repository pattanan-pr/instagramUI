/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Story = () => {
  const navigation = useNavigation();

  const storyinfo = [
    {
      id: 1,
      name: 'Your story',
      image: require('../../storage/image/cat4.jpeg'),
    },
    {
      id: 0,
      name: 'Jed NP',
      image: require('../../storage/image/cat1.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'Panu',
      image: require('../../storage/image/dog.jpeg'),
    },
    ,
    {
      id: 0,
      name: 'Shin_no.',
      image: require('../../storage/image/shinchan.jpeg'),
    },
    {
      id: 0,
      name: 'AWESOM-O',
      image: require('../../storage/image/asu.jpeg'),
    },
    {
      id: 0,
      name: 'so._p',
      image: require('../../storage/image/dog3.jpeg'),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{paddingVertical: 20}}>
      {storyinfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.push('Status', {
                name: data.name,
                image: data.image,
              })
            }>
            <View
              style={{
                flexDirection: 'column',
                paddingHorizontal: 8,
                position: 'relative',
              }}>
              {data.id == 1 ? (
                <View
                  style={{
                    position: 'absolute',
                    bottom: 15,
                    right: 10,
                    zIndex: 1,
                  }}>
                  <View style={{backgroundColor: 'white', borderRadius: 10}}>
                    <Icon
                      name="pluscircle"
                      style={{
                        // borderRadius: 100,
                        fontSize: 20,
                        color: '#405de6',
                        //   backgroundColor: 'white',
                      }}
                    />
                  </View>
                </View>
              ) : null}
              <View
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: 'white',
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: '#c13584',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={data.image}
                  style={{
                    resizeMode: 'cover',
                    width: '92%',
                    height: '92%',
                    borderRadius: 100,
                    backgroundColor: 'orange',
                  }}
                />
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 10,
                  opacity: data.id == 0 ? 1 : 0.5,
                }}>
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Story;
