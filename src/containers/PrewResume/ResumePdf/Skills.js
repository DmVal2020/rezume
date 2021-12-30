/* eslint-disable react/no-array-index-key */

import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Roboto Bold',
    fontSize: 11,
    marginBottom: 10,
  },
  skills: {
    fontFamily: 'Roboto',
    fontSize: 10,
    marginBottom: 10,
  },
});

const SkillEntry = ({ name, skills }) => (
  <View>
    <Text style={styles.title}>{name}</Text>
    <List>
      {skills.map((skill, i) => (
        <Item key={i}>{skill}</Item>
      ))}
    </List>
  </View>
);

const Skills = ({basic, additional}) =>{
  let skillsBasic = basic.formControls.competence.value.split(';')
  let skillsAdditional = additional.formControls.skills.value.split(';')
  skillsBasic = skillsBasic.filter(item=>item.trim()!=='')
  skillsAdditional = skillsAdditional.filter(item=>item.trim()!=='')
  return (
        <View>
          <Title>Навыки</Title>
          <SkillEntry
            name="Основные навыки"
            skills={skillsBasic}
          />
          <SkillEntry
            name="Дополнительные навыки"
            skills={skillsAdditional}
          />
        </View>
      );
}
 

export default Skills;