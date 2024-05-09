import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    delay={1000}
                    animation="flipInY"
                    source={require("../assets/Orcamento.png")}
                    style={styles.logo}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>
                Gostaríamos de expressar nossa sincera gratidão por escolher utilizar o aplicativo Orçamento Amigo em suas compras de mercado.
                </Text>
                <Text style={styles.Subtitle}>
                Atenciosamente,
                Equipe Orçamento Amigo
                </Text>
                {/* colocar a variavel aqui com o codigo-> Valor Total: R$ {'NomeDaVariavel'} */}
                <Text style={styles.title}>
                 Valor Total: R$ 
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('index')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>
                        Voltar ao início
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
    Subtitle:{
            fontFamily: 'Itim', 
            fontSize: 20,
            color: "#000",
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
        
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
        fontFamily: 'Itim', 
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
        fontFamily: 'Itim',
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    }
});