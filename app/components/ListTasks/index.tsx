import { FlatList, Text, View } from "react-native";
import Item from "./components/Item";
import { StyleSheet } from 'react-native';
import FloatActinBtn from "./components/floatActionBtn";

import { Link } from 'expo-router';

export default function ListTasks(){

  const DATA = [
    { id: 1, title: "Placeholder 12", date: new Date("2024-11-01"), type: "Trabalho", locate: "Casa" },
    { id: 2, title: "Placeholder 2 Extremamente grande para teste se o title aceita textos grandes, então porque não mostrar ele aqui e ver se o componente se adapta", date: new Date("2024-11-02"), type: "Estudos", locate: "Escola" },
    { id: 3, title: "Placeholder 3", date: new Date("2024-10-03"), type: "Casa", locate: "Cozinha" },
    { id: 4, title: "Placeholder 4", date: new Date("2024-09-04"), type: "Trabalho", locate: "Escritório" },
    { id: 5, title: "Placeholder 5", date: new Date("2024-01-05"), type: "Estudos", locate: "Biblioteca" },
    { id: 6, title: "Placeholder 6", date: new Date("2024-01-06"), type: "Casa", locate: "Sala" },
    { id: 7, title: "Placeholder 7", date: new Date("2024-01-07"), type: "Trabalho", locate: "Reunião" },
    { id: 8, title: "Placeholder 8", date: new Date("2024-01-08"), type: "Estudos", locate: "Laboratório" },
    { id: 9, title: "Placeholder 9", date: new Date("2024-01-09"), type: "Casa", locate: "Quarto" },
    { id: 10, title: "Placeholder 10", date: new Date("2024-01-10"), type: "Trabalho", locate: "Conferência" },
    { id: 11, title: "Placeholder 11", date: new Date("2024-01-11"), type: "Estudos", locate: "Sala de aula" },
    { id: 12, title: "Placeholder 12", date: new Date("2024-01-12"), type: "Casa", locate: "Jardim" },
    { id: 13, title: "Placeholder 13", date: new Date("2024-01-13"), type: "Trabalho", locate: "Almoço de negócios" },
    { id: 14, title: "Placeholder 14", date: new Date("2024-01-14"), type: "Estudos", locate: "Estudo em grupo" },
    { id: 15, title: "Placeholder 15", date: new Date("2024-01-15"), type: "Casa", locate: "Garagem" },
    { id: 16, title: "Placeholder 16", date: new Date("2024-01-16"), type: "Trabalho", locate: "Viagem de negócios" },
    { id: 17, title: "Placeholder 17", date: new Date("2024-01-17"), type: "Estudos", locate: "Estudo individual" },
    { id: 18, title: "Placeholder 18", date: new Date("2024-01-18"), type: "Casa", locate: "Varanda" },
    { id: 19, title: "Placeholder 19", date: new Date("2024-01-19"), type: "Trabalho", locate: "Treinamento" },
    { id: 20, title: "Placeholder 20", date: new Date("2024-01-20"), type: "Estudos", locate: "Sessão de tutoria" }
  ]

  return (
    <>
      <View style={style.container}>
        <Text style={style.subtitle}>Your tasks</Text>

        {DATA.length == 0 
          ? <Text>Fazio</Text> 
          : <FlatList 
            data={DATA} 
            renderItem={
              ({item}) => {
                return (
                  <Item 
                    id={item.id} 
                    title={item.title} 
                    date={item.date} 
                    type={item.type} 
                    locate={item.locate} 
                  />
                )
              }
          } />}
      </View>
      <FloatActinBtn />
    </>
  )
}


const style = StyleSheet.create({
  container: {
    paddingBottom: "25%",
  },
  subtitle: {
    marginStart: 15,
    marginBottom: 10
  }
  
})

