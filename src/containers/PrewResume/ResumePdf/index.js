import React from 'react';
import {
  Text,
  Font,
  Page,
  View,
  Image,
  Document,
  StyleSheet,
} from '@react-pdf/renderer';
// import { connect } from 'react-redux';

import Header from './Header';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Person from './Person';
import Goals from './Goals';
import NeoSkills from './NeoSkills';
import Info from './Info';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    '@media max-width: 400': {
      flexDirection: 'column',
    },
  },
  mainContainer: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 15,
    '@media max-width: 400': {
      paddingTop: 10,
      paddingLeft: 0,
    },
  },
  image: {
    marginBottom: 10,
  },
  leftColumn: {
    flexDirection: 'column',
    width: 170,
    paddingTop: 30,
    paddingRight: 15,
    '@media max-width: 400': {
      width: '100%',
      paddingRight: 0,
    },
    '@media orientation: landscape': {
      width: 200,
    },
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Roboto Bold',
    textAlign: 'center',
    marginTop: 15,
    paddingTop: 5,
    borderWidth: 3,
    borderColor: 'gray',
    borderStyle: 'dashed',
    '@media orientation: landscape': {
      marginTop: 10,
    },
  },
});

Font.register({
  family: 'Open Sans',
  src: `https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf`,
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




Font.register({
  family: 'Lato',
  src: `https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wWw.ttf`,
});

Font.register({
  family: 'Lato Italic',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u8w4BMUTPHjxsAXC-v.ttf`,
});

Font.register({
  family: 'Lato Bold',
  src: `https://fonts.gstatic.com/s/lato/v16/S6u9w4BMUTPHh6UVSwiPHA.ttf`,
});

const Resume = ({data}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header blocks={data.blocks}/>
      <View style={styles.container}>
        <View style={styles.leftColumn}>
          <Image
            src="https://react-pdf.org/static/images/luke.jpg"
            style={styles.image}
          />
          <Education block={data.blocks[5]}/>
          <Skills basic={data.blocks[2]} additional={data.blocks[3]} />
        </View>
        <View style={styles.mainContainer}>
          <Person block={data.blocks[0]}/>
          <Goals block={data.blocks[1]}/>
          <Experience block={data.blocks[4]}/>
          <NeoSkills block={data.blocks[6]}/>
          <Info block={data.blocks[7]}/>
        </View>
        
      </View>
      {/* <Text style={styles.footer}>This IS the candidate you are looking for</Text> */}
    </Page>
  </Document>
  
);

// function mapStateToProps(data){
// 	return {...data}
// }
// export default connect(mapStateToProps)(Resume)

export default Resume

// export default () => (
//   <Document
//     author="Luke Skywalker"
//     keywords="awesome, resume, start wars"
//     subject="The resume of Luke Skywalker"
//     title="Resume"
//   >
//     <Resume size="A4" />
//     <Resume orientation="landscape" size="A4" />
//     <Resume size={[380, 1250]} />
//   </Document>
// );