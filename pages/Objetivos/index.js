import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';

//colocar a url da API nesse caminho
import { url } from '../../utils/constants';

const Objetivso = () => {
    const [objetivos, setObjetivos] = useState([]);

    useEffect(() => {
        ListarObjetivos()
    },[])


    const ListarObjetivos = () => {
        fetch( url +'objetivos', {
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

    return (
        <View styles={styles.container}>
            <FlatList
                data={objetivos}
                renderItem={renderItem}
                keyExtractor={item => item.Id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9d0dca',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f9e800',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 15,
      },
      title: {
        fontSize: '16px',
      },
});

export default Objetivos;