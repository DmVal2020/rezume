import React from 'react'
import { View, StyleSheet } from '@react-pdf/renderer';

import Title from './Title';
import List, { Item } from './List';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  entryContainer: {
    marginBottom: 10,
  },
  date: {
    fontSize: 11,
    fontFamily: 'Roboto Italic',
  },
  detailContainer: {
    flexDirection: 'row',
  },
  detailLeftColumn: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
  },
  detailRightColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  bulletPoint: {
    fontSize: 10,
  },
  details: {
    fontSize: 10,
    fontFamily: 'Roboto',
  },
  headerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    flexGrow: 9,
  },
  rightColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    alignItems: 'flex-end',
    justifySelf: 'flex-end',
  },
  title: {
    fontSize: 11,
    color: 'black',
    textDecoration: 'none',
    fontFamily: 'Roboto Bold',
  },
});
const NeoSkillsEntry = ({neoSkills}) => {
    //const title = `неформальное образование`;
    neoSkills = neoSkills.filter(item=>item.trim()!=='')
    return (
      <View style={styles.entryContainer}>
        {/* <View style={styles.headerContainer}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View> */}
        <List>
          {neoSkills.map((detail, i) => (
            <Item key={i} style={styles.detailContainer}>
              {detail}
            </Item>
          ))}
        </List>
      </View>
    );
  };


function NeoSkills({block}) {
    const neoSkills = block.formControls.skills.value.split(';')
    return (
        <View style={styles.container}>
          <Title>Неформальное образование</Title>
          <NeoSkillsEntry neoSkills={neoSkills}/>
        </View>
      );
}

export default NeoSkills
