import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, StatusBar }from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as Animatable from 'react-native-animatable';

export default function Bem_Vindo() {
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
                <View style={ESTILOS.containerLogo}>
                    <Animatable.Image
                        delay={1000}
                        animation="flipInY"
                        source={require("../assets/Orcamento.png")}
                        style={ESTILOS.logo}
                        resizeMode="contain"
                    />
                </View>
                <Animatable.View delay={600} animation='fadeInUp' style={ESTILOS.containerForm}>
                    <Text style={ESTILOS.title}>
                        Sejam bem-vindos ao aplicativo Orçamento Amigo, sua melhor companhia para as compras
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('entrada')}
                        style={ESTILOS.button}>
                        <Text style={ESTILOS.buttonText}>
                            Começar
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>
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
    title: {
        position: 'absolute',
        fontFamily: 'Itim',
        fontSize: 24,
        marginTop: 10,
        marginBottom: 12,
        color: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
