import { FlatList, Text, View } from "react-native";
import Item from "./components/Item";
import { StyleSheet } from 'react-native';
import FloatActinBtn from "./components/floatACtionBtn";



export default function ListTasks(){

  const DATA = [
    { id: 1, title: "Titulo 1" },
    { id: 2, title: "Titulo 2" },
    { id: 3, title: "Titulo 3" },
    { id: 4, title: "Titulo 4" },
    { id: 5, title: "Titulo 5" },
    { id: 6, title: "Titulo 6" },
    { id: 7, title: "Titulo 7" },
    { id: 8, title: "Titulo 8" },
    { id: 9, title: "Titulo 9" },
    { id: 10, title: "Titulo 10" },
    { id: 11, title: "Titulo 11" },
    { id: 12, title: "Titulo 12" },
    { id: 13, title: "Titulo 13" },
    { id: 14, title: "Titulo 14" },
    { id: 15, title: "Titulo 15" },
    { id: 16, title: "Titulo 16" },
    { id: 17, title: "Titulo 17" },
    { id: 18, title: "Titulo 18" },
    { id: 19, title: "Titulo 19" },
    { id: 20, title: "Titulo 20" },
  ]

  return (
    <>
      <View style={style.container}>
        <Text>Your tasks</Text>
        {DATA.length == 0 ? <Text>Fazio</Text> : <FlatList data={DATA} renderItem={({item}) => <Item title={item.title} />} />}
        
        
      </View>
      <FloatActinBtn />
    </>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: "#7bef07213",
    paddingBottom: "20%",
    height: '90%'
  },
})

