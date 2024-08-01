import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Screens/HomeScreen';
import coursesScren from './src/Screens/kurslar';
import kursBilgi from './src/Screens/kursBilgi';
import CounterScreen from './src/Screens/counterScreen';
import BoxScreen from './src/Screens/BoxScreen';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="coursesScren" component={coursesScren} />
        <Stack.Screen name ="kursbilgi" component={kursBilgi}/>
        <Stack.Screen name='SayacSayfa' component={CounterScreen}/>
        <Stack.Screen name='KutuSayfasi' component={BoxScreen}/>
      </Stack.Navigator>
     
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({


});
