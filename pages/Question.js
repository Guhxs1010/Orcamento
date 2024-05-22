import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';
import { Ionicons } from '@expo/vector-icons';

export default function Bem_Vindo() {
    // consts
    const navigation = useNavigation();
    const [fontsLoaded] = useFonts({
        'Itim': require('../assets/fonts/Itim-Regular.ttf')
    });
    const [fontsLoaded2] = useFonts({
        'Inter': require('../assets/fonts/Inter.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    if (!fontsLoaded2) {
        return null;
    }

    return (
        <ImageBackground source={require('../assets/fundo.png')} style={ESTILOS.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fff" />
            <View style={ESTILOS.container}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={ESTILOS.buttonback}>
                    <Ionicons name="chevron-back-outline" size={44} color="white" />
                </TouchableOpacity>


                <View style={ESTILOS.textos}>
                    <Text style={ESTILOS.title}>
                        Dúvida?
                    </Text>
                </View>
                <View style={ESTILOS.subtextos}>
                    <Text style={ESTILOS.subtitle}>
                        Para adicionar um novo item, clique no botão '+'.
                    </Text>
                </View>
                <View style={ESTILOS.subtextos2}>
                    <Text style={ESTILOS.subtitle}>
                        Para editar um item existente, toque no item da lista e uma tela de edição será exibida.
                    </Text>
                </View>

            </View>
        </ImageBackground>
    );
}

const ESTILOS = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "70%"
    },
    containerForm: {
        flex: 2.2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    textos: {
        top: 210,
    },
    buttonback:{
        top:55,
        left:15,
    },
    subtextos: {
        top: 300,
    },
    subtextos2: {
        top: 400,
    },
    title: {
        position: 'absolute',
        fontFamily: 'Itim',
        fontSize: 35,
        marginTop: 10,
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    subtitle: {
        position: 'absolute',
        fontFamily: 'Itim',
        fontSize: 23,
        marginTop: 10,
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 250,
    },
    button: {
        position: 'absolute',
        backgroundColor: '#06C167',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Itim',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});
