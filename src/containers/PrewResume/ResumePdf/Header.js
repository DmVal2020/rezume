import React from 'react';

import { Link, Text, View, Font, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#112131',
    borderBottomStyle: 'solid',
    alignItems: 'stretch',
  },
  detailColumn: {
    flexDirection: 'column',
    flexGrow: 9,
    textTransform: 'uppercase',
  },
  linkColumn: {
    flexDirection: 'column',
    flexGrow: 2,
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Roboto Bold',
  },
  subtitle: {
    fontSize: 10,
    justifySelf: 'flex-end',
    fontFamily: 'Roboto',
  },
  link: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: 'black',
    textDecoration: 'none',
    alignSelf: 'flex-end',
    justifySelf: 'flex-end',
  },
});
Font.register({
  family: "Roboto",
  src:
    "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
});
Font.register({
  family: "Roboto Bold",
  src:
    "http://fonts.gstatic.com/s/roboto/v15/bdHGHleUa-ndQCOrdpfxfw.ttf"
});
Font.register({
  family: "Roboto Italic",
  src:
    "http://fonts.gstatic.com/s/roboto/v15/hcKoSgxdnKlbH5dlTwKbow.ttf"
});

 const Header = ({blocks}) => {
   const name = blocks[0].formControls.name.value
   const email = blocks[0].formControls.email.value
   const tel = blocks[0].formControls.tel.value
   const position = blocks[0].formControls.position.value
   return (
      <View style={styles.container}>
        <View style={styles.detailColumn}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{position}</Text>
        </View>
        <View style={styles.linkColumn}>
          <Link href={`mailto:${email}`} style={styles.link}>
            {email}
          </Link>
          <Link href={`tel:${tel}`} style={styles.link}>
            {tel}
          </Link>
        </View>
      </View>
    );
 }

  
export default Header