import React, { useState } from 'react';
import { Checkbox } from 'react-native-paper';
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Tags from './TagsBar/tags';

type props = {
  id: number,
  title: string,
  date: Date,
  type: string,
  locate: string
}

export default function Item({id, title, date, type, locate}: props){

  const [ checked, setChecked ] = useState(false);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return(
    
    // <View style={[styles.container, styles.shadowProp]}>
    //   <Text>sdADsadsads</Text>
    // </View>

    <TouchableOpacity onPress={() => {}} style={[styles.container, styles.shadowProp]}>
      
      <View style={styles.checkbox}>
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          />
        <Text style={styles.text}>{title}</Text>
      </View>

      <Tags date={formattedDate} type={type} locate={locate}/>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
  container: {
    // width: '100%',
    flex: 1,
    // borderWidth: 1,
    borderRadius: 10,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 5,
    marginBottom: 5,
    // marginEnd: 10,
    padding: 10,
    backgroundColor: 'white',
  },

  shadowProp: {
    shadowColor: '#171717',
    elevation: 5,
  },
  
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },

  text: {
    marginEnd: 30
  }
})