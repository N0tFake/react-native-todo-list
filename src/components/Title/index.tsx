import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

export default function Title(){

  let date = new Date()
  let day = date.getDate()
  let dayWeek = date.getDay()
  let numberMonth = date.getMonth()
  const list_days_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const list_month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <View style={styles.container}>
      <Text style={styles.textDayWeek}>{list_days_week[dayWeek]},</Text>
      <Text style={styles.textDay}>{day} </Text>
      <Text style={styles.textDay}>{list_month[numberMonth]}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    
  },
  textDayWeek: {
    fontSize: 30,
    fontFamily: "Poppins-SemiBold",
    marginEnd: 10
  },
  textDay: {
    fontSize: 25,
    fontFamily: "Poppins-Regular",
    fontWeight: '200'
  }
})