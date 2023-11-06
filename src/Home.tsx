import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';
import Title from './components/Title';
import ListTasks from './components/ListTasks';
export default function Home() {

  return (
    <>
      <AppBar />
      <View style={styles.container}>
        <Title />
        <ListTasks />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
