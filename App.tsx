import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Peliculastate from './context/peliculaState';
//Screen
import HomeScreen from './screens/HomeScreen';

const App = ()  => {
  const styles = StyleSheet.create({
    container: { 
      marginTop: 45
    }
  });  
  return (
    <Peliculastate>
      <View style={[styles.container]}>
        <HomeScreen/>
      </View>
    </Peliculastate>

  );


}

export default App;
