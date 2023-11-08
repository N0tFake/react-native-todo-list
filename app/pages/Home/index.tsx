import { StyleSheet, Text, View } from 'react-native';
import AppBar from '../../components/AppBar';
import ListTasks from '../../components/ListTasks';
import Title from '../../components/Title';
export default function Home() {

  return (
    <>
      <AppBar title='Welcome'/>
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
