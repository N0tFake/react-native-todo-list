import { FAB, Appbar } from 'react-native-paper'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export default function FloatActinBtn(){

  const { bottom } = useSafeAreaInsets();

  return (
    <Appbar
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        <FAB
          mode="flat"
          size="medium"
          icon="plus"
          onPress={() => {}}
          style={[
            styles.fab,
            { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
          ]}
        />
      </Appbar>
  )
}

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff'
  },
  fab: {
    position: 'absolute',
    right: 10,
  },
});