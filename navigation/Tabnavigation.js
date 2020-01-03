import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import A from '../screens/A';
import B from '../screens/B';
import C from '../screens/C';
import D from '../screens/D';



const bottomTabNavigator = createBottomTabNavigator({
  홈: { screen: A },
  구독: { screen: B },
  좋아요: { screen: C },
  기록: { screen: D }
},
  {
    tabBarOptions: {
      scrollEnabled: true,
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 20,
      },
      style: {
        backgroundColor: 'blue',
      },
    }
  });

const topTapNavigator = createMaterialTopTabNavigator({
  홈: { screen: A },
  구독: { screen: B },
  좋아요: { screen: C },
  기록: { screen: D },
  보관함: { screen: D }
}, {
  navigationOptions: {
    scrollEnabled: true
  }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    scrollEnabled: true,
    labelStyle: {
      fontSize: 20,
    },
    style: {
      backgroundColor: 'blue',
      marginTop: 10
    },
    tabStyle: {
      marginTop: 10 //Padding 0 here
    }
  }
}
);



export default createAppContainer(topTapNavigator, bottomTabNavigator);