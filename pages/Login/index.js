import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Logo} from '../../assets/EduXLogo.PNG'

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const salvar = async (value) => {
        try {
            await AsyncStorage.setItem('@jwt', value)
        } catch (e) {
            
        }
    }

    const Logar = ( {navigation} ) => {
        
        const corpo = {
            email : email,
            senha : senha
        }

        fetch('http://192.168.0.6:5000/api/Account/login', {
            method: 'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(corpo)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.status != 404){
                alert('Seja bem-vinde!');
                console.log(data.token);
                salvar(data.token);
                navigation.push('Autenticado');
            }else{
                alert('Email ou senha iválidos');
            }


        })
    }
    
    return(
        <View style={styles.container}>
            <h1 style={{color : 'white', fontFamily : 'fantasy', fontSize : '90px'}}>EduX</h1>
            <h2 style={{color : 'white', fontFamily : 'monospace'}}>LOGIN</h2>   

            <TextInput
                style={styles.input}
                onChangeText={text => setEmail(text)}
                value={email}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                onChangeText={text => setSenha(text)}
                value={senha}
                placeholder="Senha"
                secureTextEntry={true}
            />

            <TouchableOpacity
                style={styles.button}
                onPress={Logar}
            >
                <Text style={styles.textButton}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#9D0DCA',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    input : {
      width : '70%',
      height : 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      marginTop : 20,
      padding : 5,
      borderRadius : 6,
      backgroundColor : '#FFFFFF'
    },
    
    button : {
      backgroundColor : '#FFFFFF',
      width : '70%',
      padding : 10,
      borderRadius : 6,
      marginTop : 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    textButton : {
      color : '#9D0DCA',
      fontWeight : 'bold',
    },
  });

export default Login;
