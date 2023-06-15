import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/AntDesign';
import Iconf from 'react-native-vector-icons/FontAwesome';

const Post = () => {
  const postinfo = [
    {
      title: 'Shin_no.',
      postPersonImg: require('../../storage/image/shinchan.jpeg'),
      postImg: require('../../storage/image/jap.jpeg'),
      description: 'Ready for an unforgettable vacation! 🇯🇵✨',
      like: 1098,
      isLike: false,
    },
    {
      title: 'Panu',
      postPersonImg: require('../../storage/image/dog.jpeg'),
      postImg: require('../../storage/image/football.jpeg'),
      description: 'Cant wait, you guy!!!!',
      like: 3208,
      isLike: false,
    },
    {
      title: 'Jep NP',
      postPersonImg: require('../../storage/image/cat1.jpeg'),
      postImg: require('../../storage/image/slp.jpeg'),
      description: "Let's gooo 12 hours next sleeping hours :))))))",
      like: 4666,
      isLike: false,
    },
    {
      title: 'AWESOME_O',
      postPersonImg: require('../../storage/image/asumo.jpeg'),
      postImg: require('../../storage/image/sp.jpeg'),
      description: "Haa what a mass",
      like: 206,
      isLike: false,
    },
  ];

  return (
    <View>
      {postinfo.map((data, index) => {
        const [like, setLike] = useState(data.isLike);
        return (
          <View key={index}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 10,
                paddingRight: 17,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View
                  style={{
                    width: 45,
                    height: 45,
                    backgroundColor: 'white',
                    borderWidth: 1.8,
                    borderRadius: 100,
                    borderColor: '#c13584',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={data.postPersonImg}
                    style={{
                      resizeMode: 'cover',
                      width: '92%',
                      height: '92%',
                      borderRadius: 100,
                      backgroundColor: 'orange',
                    }}
                  />
                </View>
                <Text style={{fontWeight: '700', fontSize: 15}}>
                  <Text>{'   '}</Text>
                  {data.title}
                </Text>
              </View>
              <Icon
                name="dots-three-horizontal"
                style={{fontSize: 18, color: 'black', opacity: 0.6}}
              />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImg}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 13}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <Icons
                    name={like ? 'heart' : 'hearto'}
                    size={28}
                    color={'#737373'}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icons name={'message1'} size={28} color={'#737373'} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Iconf name={'send'} size={28} color={'#737373'} />
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Iconf name={'bookmark-o'} size={30} color={'#737373'} />
              </TouchableOpacity>
            </View>
            <View style={{paddingStart: 14}}>
              <Text style={{color: 'gray'}}>Liked by {data.like} others</Text>
            </View>
            <View
              style={{
                paddingStart: 16,
                paddingTop: 10,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text style={{fontWeight: '800', fontSize: 15}}>
                {data.title}
              </Text>
              <Text style={{fontWeight: '400', fontSize: 15}}>
                {data.description}
              </Text>
            </View>
            <View style={{paddingStart: 16, paddingTop: 8}}>
              <Text style={{fontWeight: '400', fontSize: 15, color: 'gray'}}>
                View all comments
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
