import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/AntDesign';
import Home from './src/components/screen/Home';
import Search from './src/components/screen/Search';
import Reels from './src/components/screen/Reels';
import Activity from './src/components/screen/Activity';
import Profile from './src/components/screen/Profile';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {height: 90},
          tabBarIcon: ({size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = 35;
            } else if (route.name === 'Search') {
              iconName = 'search1';
              size = 28;
            } else if (route.name === 'Reels') {
              iconName = 'plussquareo';
              size = 28;
            } else if (route.name === 'Activity') {
              iconName = 'hearto';
              size = 26;
            } else if (route.name === 'Profile') {
              iconName = 'user';
              size = 26;
            }
            return <Icons name={iconName} size={size} color={'#737373'} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  const MyStack = () => {
    return (
      <Stack.Navigator
        initialRouteName="bottomTabSearch"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="bottomTabSearch"
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
