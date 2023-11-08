import {Text, View, StyleSheet } from 'react-native';

type Props = {
  text: string
}

export default function TagText({text}: Props){
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>{text}</Text>  
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner:{
    paddingEnd: 5,
    paddingStart: 5,
    borderRadius: 5,
    backgroundColor: 'hsl(190, 100%, 75%)',
    
  },
  
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: 'hsl(190, 100%, 25%)' 
  },
})