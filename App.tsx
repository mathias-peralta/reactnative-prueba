import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import Peliculastate from './context/peliculaState';
//Screen
import HomeScreen from './screens/HomeScreen';
import DetallesScreen from './screens/DetallesScreen';


const Stack = createNativeStackNavigator();


const App = ()  => {
  const styles = StyleSheet.create({
    container: { 
      marginTop: 45
    }
  });  
  return (
    <NavigationContainer>
        <Peliculastate>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="DetallesScreen" component={DetallesScreen} />
            </Stack.Navigator>
        </Peliculastate>
    </NavigationContainer>
  );


}

export default App;
