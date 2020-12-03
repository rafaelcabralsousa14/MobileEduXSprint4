import React from 'react'
import {StyleSheet, View, Text, StatusBar, Dimensions, TouchableHighlight} from 'react-native';



const Ranking = () => {

    return (
        <View style={styles.container}>
        <Text style={styles.titulo}>RANKING GERAL</Text>        
        <StatusBar style="auto" />


      <View>
        <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        backgroundColor:'#00D65F',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    >
      <Text style={styles.c1}> Objetivos oncluidos </Text>
      </TouchableHighlight>
    </View>

    <View style={styles.obj}>
    <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        backgroundColor:'#00C2EE',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    >
      <Text style={styles.c2}> Posts curtidos </Text>
    </TouchableHighlight>

    <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        backgroundColor:'#F9E800',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: '50px'       
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    >
      <Text style={styles.c3}> Segredos encontrados </Text>
    </TouchableHighlight>
    </View>

    <View>
    <TouchableHighlight
      style = {{
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        backgroundColor:'#FF271C',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}
      underlayColor = '#ccc'
      onPress = { () => alert('Yaay!') }
    >
      <Text style={styles.c4}> Notas máximas </Text>
    </TouchableHighlight>
    </View>
      </View>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -170,
      

    },

    titulo: {
      fontFamily: "Andale Mono, monospace", 
      fontSize: 35,
      fontWeight: 'bold',
      color: "#9D0DCA",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 50,
  },

    c1: {
      color: "#fff",
    },

    obj: {
      flex : -1,
      flexDirection: 'row',
      justifyContent : "space-between",
    },

    c2: {
      color: "#fff"
    },

    c3: {
      color: "#fff"
    },

    c4: {
      color: "#fff"
    }
    
    
  });


  export default Ranking;