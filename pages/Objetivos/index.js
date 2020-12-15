import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../../components/header';


const Objetivos = () => {
    const [objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        ListarObjetivos()
    },[])


    const ListarObjetivos = () => {
        fetch( 'COLOCAR O LINK' +'objetivos', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                setObjetivos(data.data);
                console.log(data.data)
            })

            .catch(err => console.error(err))
    }

    const Item = ({ descricao }) => {
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{descricao}</Text>
            </View>
        )
    };

    const renderItem = ({ item }) => {
        return (
            <Item descricao={item.descricao} />
        )

    };

    return(
        <View>
            <Header/>
            <Text style={styles.Titulo}>Objetivos</Text>
            <FlatList
                data={objetivos}
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

export default Objetivos;