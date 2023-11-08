import { FAB, Appbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { Link } from "expo-router";

export default function FloatActinBtn(){

  // const { bottom } = useSafeAreaInsets();

  return (
    <Link href="/pages/Task" asChild>
      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        label='New Task'
        // onPress={() => {}}
        style={styles.fab}
      />
    </Link>
   
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});