import {Text, View, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  icon: React.ReactNode,
  text: string
}

export default function TagWithIcon({icon, text}: Props){
  return (
    <View style={styles.conteiner}>
      <>{icon}</>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
  },
  text: {
    marginStart: 2,
  }
})