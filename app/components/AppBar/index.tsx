import { Appbar } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';

type Props = {
  goBack?: boolean,
  routerBack?: string,
  title: string
} 

export default function AppBar({title, goBack=false, routerBack=''}: Props){
  return (
    <Appbar.Header style={styles.appbar}>
      {goBack && <Appbar.BackAction onPress={() => console.log(true)} />}
      <Appbar.Content style={styles.appbar} title={title} />
      <StatusBar style="auto" />
    </Appbar.Header>
  )  
}


const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#fff"
  }
});