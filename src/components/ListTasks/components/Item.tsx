import { StyleSheet, Text, View } from 'react-native';

type props = {
  title: string,
}

export default function Item({title}: props){
  return(
    <View style={style.container}>
      <Text>{title}</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F23232",
    marginBottom: 5,
    padding: 10
  }
})