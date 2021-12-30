import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

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
const InfoEntry = ({block, subtitle}) => {
    let title = ''
    switch(subtitle){
        case 'stan' :
            title =`Дополнительные навыки и характеристики`;
            break;
        case 'auto' :
            title =`Водительские права (категории)`;
            break;
        case 'natureQfWork' :
            title =`Характер выполняемой работы`;
            break;
        case 'schedule' :
            title =`График работы`;
            break;
        case 'languages' :
            title =`Владение языками`;
            break;
        case 'tolerance' :
            title =`Наличие допусков и разрешений`;
            break;            
        default: break ;        
    }
    let info
    if(block.formControls[subtitle].control==='checkbox'){
        info = block.formControls[subtitle].controls.map(item=>item.checked?item.value:null)
        info = info.filter(item=>item!==null)
    }else{
        info = block.formControls[subtitle].value.split(';')
        info = info.filter(item=>item.trim()!=='')
    }   
    
    if(info.length > 0){
      return (
              <View style={styles.entryContainer}>
                <View style={styles.headerContainer}>
                  <View style={styles.leftColumn}>
                    <Text style={styles.title}>{title}</Text>
                  </View>
                  {/* <View style={styles.rightColumn}>
                    <Text style={styles.date}>{date}</Text>
                  </View> */}
                </View>
                <List>
                  {info.map((detail, i) => (
                    <Item key={i} style={styles.detailContainer}>
                      {detail}
                    </Item>
                  ))}
                </List>
              </View>
            );
    }else{
      return null
    } 
    
  };


function Info({block}) {
    // const info = block.formControls.skills.value.split(';')
    return (
        <View style={styles.container}>
          <Title>Дополнительная информация</Title>
          <InfoEntry block={block} subtitle='stan'/>
          <InfoEntry block={block} subtitle='auto'/>
          <InfoEntry block={block} subtitle='natureQfWork'/>
          <InfoEntry block={block} subtitle='schedule'/>
          <InfoEntry block={block} subtitle='languages'/>
          <InfoEntry block={block} subtitle='tolerance'/>
        </View>
      );
}

export default Info
