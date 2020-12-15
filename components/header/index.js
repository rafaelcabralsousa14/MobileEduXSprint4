import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import Logo from './../../assets/EduxLogo.png';


const Header = () => {
    const Logout = ({ navigation }) => {
        return (
            < View >{
                alert('Sair de EDUX?')
            }
                <TouchableOpacity onPress={() => {
                    AsyncStorage.removeItem('@jwt');
                    navigation.push('Login');
                }} > </TouchableOpacity>
            </View >
        )
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={Logo}
            />
            <TouchableOpacity onPress={Logout}>
                <FontAwesome name="sign-out" size={35} color='#FFFFFF' />
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 55,
        backgroundColor: '#9D0DCA',
        display: 'flex',
        marginBottom: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 90,
        height: 40
    }
});

export default Header;
