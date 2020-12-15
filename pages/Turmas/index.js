import React, {useEffect, useState} from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import itemTurma from '../../components/itemTurma';
import Header from '../../components/header';



 
const Turma = () => {

    const[turmas, setTurmas] = useState([]);

    useEffect(() => {
        listarTurmas();
    }, [])

    const listarTurmas = () => {
        fetch(`http://http://192.168.0.6:5000/api/Turma`)
            .then(response => response.json())
            .then(dados => {
            setTurmas(dados);
            console.log(dados);
        })
        .catch(err => console.error(err));
    }

    const renderItem = ({item}) => {
        return(
            <itemTurma
                descricao = {item.informacoes}
            />
        )
    }


    return(
        <View>
                <StatusBar hidden={true}/>

            <Header/>
            <Text style={styles.Titulo}>Turmas</Text>
            <FlatList
                data={turmas}
                keyExtractor={item=> item.id}
                renderItem={renderItem}
            />
        </View>
    )

    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        marginTop:60
      },

      listItem:{
        margin:12,
        padding:12,
        backgroundColor:"#FFFFFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:8,
        fontFamily: "Titillium Web"
      },

    Titulo:
    {
    color : '#9D0DCA',
    fontFamily: "Titillium Web",
    fontWeight : 'bold',
    fontSize : 35, 
    alignSelf:"center" 
     }

  });

export default Turma;