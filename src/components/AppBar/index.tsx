import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

export default function AppBar(){
  return (
    <Appbar.Header style={styles.appbar}>
      <Appbar.Content style={styles.appbar} title="Welcome" />
      <StatusBar style="auto" />
    </Appbar.Header>
  )  
}


const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#fff"
  }
});