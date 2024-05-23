import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
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
        <ImageBackground source={require('../assets/fundo.png')} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        delay={200}
                        animation="flipInY"
                        source={require("../assets/FoxErro.png")}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>
                <Animatable.View delay={100} animation='fadeInUp' style={styles.containerForm}>
                    <Text style={styles.subtitle}>
                        Erro 404
                    </Text>
                    <Text style={styles.title}>
                        Erro ao finalizar, volte a pagina de inserir as informações, e verifique se todos os dados foram preenchidos
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('entrada')}
                        style={styles.button}>
                        <Text style={styles.buttonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                </Animatable.View>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerLogo: {
        flex: 2.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: "100%",
        height:150,
    },
    containerForm: {
        flex: 2.2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    title: {
        fontFamily: 'Itim',
        fontSize: 20,
        color: "#fff",
        alignSelf: 'center',
        bottom:67,
        width:300,
    },
    subtitle: {
        fontFamily: 'Itim',
        fontSize: 30,
        color: "#fff",
        alignSelf: 'center',
        bottom:80,
    },
    button: {
        backgroundColor: '#06C167',
        borderRadius: 10,
        bottom:5,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
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