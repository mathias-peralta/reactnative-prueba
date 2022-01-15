import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
//Screen
import HomeScreen from './screens/HomeScreen';

const App = ()  => {
  const styles = StyleSheet.create({
    container: { 
      marginTop: 45
    }
  });  
  return (
    <View style={[styles.container]}>
      <HomeScreen/>
    </View>
  );


}

export default App;
