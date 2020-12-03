import 'react-native-gesture-handler';
import * as React from 'react';
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ranking from './src/ranking';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen name="EduX" component={Ranking}
          options={({ route }) => 
          ({ title: route.params,
            headerStyle: {
              backgroundColor: '#9D0DCA',
            },

            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Sair"
                color="##9D0DCA"
              />
            ),
         })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



