import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
    const [fontsLoaded3] = useFonts({
        'Robot': require('../assets/fonts/RobotoFlex.ttf')
    });

    if (!fontsLoaded) {
        return null;
    }
    if (!fontsLoaded2) {
        return null;
    }
    if (!fontsLoaded3) {
        return null;
    }

    return (
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
                <TouchableOpacity
                    onPress={() => navigation.navigate('index')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        inicial
                    </Text>
                </TouchableOpacity>
            </Animatable.View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#FFF',
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
        fontFamily: 'Robot', 
        fontSize: 24,
        color: "#000",
        alignSelf: 'center',
    },
    button: {
        marginTop: 20,
        backgroundColor: '#000',
        borderRadius: 10,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontFamily: 'Robot',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});