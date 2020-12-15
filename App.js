import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Login from './pages/Login';
import Dicas from './pages/Dicas';
import Objetivos from './pages/Objetivos';
import Ranking from './pages/Ranking';
import Turmas from './pages/Turmas';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
      inactiveBackgroundColor: '#00D65F',
      activeBackgroundColor: '#00D65F',
      showIcon: true,
      style: {
        backgroundColor: '#00D65F',
        alignItems: 'space-around',
      },
      labelStyle: {
        color: '#fff',
        fontFamily: 'Titillium Web',
        fontSize: '12px'
      }
    }}>
        <Tab.Screen name="Login" component={Login}/>
        <Tab.Screen name="Home" component={Ranking} />
        <Tab.Screen name="Postagens" component={Dicas} />
        <Tab.Screen name="Objetivos" component={Objetivos} />
        <Tab.Screen name="Turmas" component={Turmas} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00D65F',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
