import {View, StyleSheet } from 'react-native';
import { Calendar, MapPin } from 'phosphor-react-native';
import TagText from './tagText';
import TagWithIcon from './tagWithIcon';

type Props = {
  type: string;
  date: string;
  locate: string;
}

export default function Tags({type, date, locate}: Props){
  return (
    <View style={styles.container}>
      <TagText text={type}/>
      <TagWithIcon icon={<Calendar size={16}/>} text={date}/>
      <TagWithIcon icon={<MapPin size={16}/>} text={locate}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  },
})