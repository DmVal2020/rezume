import React from 'react'
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
      paddingTop: 30,
      paddingLeft: 15,
      '@media max-width: 400': {
        paddingTop: 10,
        paddingLeft: 0,
      },
    },
    date: {
      fontSize: 11,
      fontFamily: 'Roboto Italic',
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

const Person = ({block})=> {
    // const experience = `стаж работы ${block.formControls.position.value} (лет) :  ${block.formControls.experience.value}`;
    // const salary = `ожидаемая зарплата ($) : ${block.formControls.salary.value}`;
    return (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
            <Text style={styles.title}>{`стаж работы ${block.formControls.position.value} (лет) :`}</Text>            
        </View>  
        <View style={styles.rightColumn}>
            <Text style={styles.date}>{`${block.formControls.experience.value}`}</Text>
        </View>  
    </View>
    <View style={styles.headerContainer}>
        <View style={styles.leftColumn}>
            <Text style={styles.title}>{`ожидаемая зарплата ($) :`}</Text>            
        </View>  
        <View style={styles.rightColumn}>
            <Text style={styles.date}>{`${block.formControls.salary.value}`}</Text>
        </View>  
    </View>   
  </View>
);
}

export default Person
