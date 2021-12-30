import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  school: {
    fontFamily: 'Roboto Bold',
    fontSize: 10,
  },
  degree: {
    fontFamily: 'Roboto',
    fontSize: 10,
  },
  candidate: {
    fontFamily: 'Roboto Italic',
    fontSize: 10,
  },
});

 const Education = ({block}) =>{
  const count = block.count
  const educations = block.formControls
  const arr = []

  for(let i = 0; i<=count; i++){
    if(educations[`univer${i}`] !== undefined){
      let educ = {
        univer:educations[`univer${i}`]['value'],
        degree:educations[`degree${i}`]['value'],
        specialisation:educations[`specialisation${i}`]['value'],
        finish:educations[`finish${i}`]['value'],
      }
      arr.push(educ)
    }
  }
  console.log(arr)
  function renderText(){
    return arr.map((ed,index)=>(
      <div key={index}>
          <Text style={styles.school}>Заведение : {ed.univer}</Text>
          <Text style={styles.degree}>Степень : {ed.degree}</Text>
          <Text style={styles.candidate}>Специальность : {ed.specialisation}</Text>
          <Text style={styles.candidate}>Год : {ed.finish}</Text>
      </div>
    ))
  }
  return (
        <View style={styles.container}>
          <Title>Образование</Title>
          {renderText()}
        </View>
      );
 } 

export default Education