import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';


Font.register({
    family: "Roboto",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf"
  });
// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    flexGrow: 1
  },
  section: {
    margin: 10,
    padding: 10,    
  },
  myText : {
    fontFamily : "Roboto"
  }
});

// Create Document Component
const PrewRezumePdf = ({blocks}) =>{
    function renderTitle(){
        return blocks.map(block=>{
            return (<div key={block.id}>
                        <Text style={styles.myText} >{block.title}</Text>
                        {getSubTitle(block)}
                    </div>)
        })
    }
    function getSubTitle(block){
        const formControls = block.formControls 
        let keys =Object.keys(formControls)
        return keys.map((key,index)=>{
            return (<div key={key+index}>
                    {formControls[key].label && formControls[key].value!==''
                        ? 
                            <View style={styles.section} >
                                <Text style={styles.myText}>{formControls[key].label + ': ' + formControls[key].value}</Text>
                            </View>
                        :null
                    }
                    </div>                              
            )
        })

    }
    return (
            <Document>
                <Page size="A4" style={styles.page} >
                    <View style={styles.section}>
                        {renderTitle()}
                    </View>
                </Page>
            </Document>
    );
} 

export default PrewRezumePdf