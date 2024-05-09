import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ModalScreen from '../pages/Modalscreen';

export default function App() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={ESTILOS.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />

            <View style={ESTILOS.cabecalho}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={ESTILOS.buttonback}>
                    <Ionicons name="chevron-back-outline" size={44} color="white" />
                </TouchableOpacity>
                <Text style={ESTILOS.textcabe}>Insira os valores, os produtos e quantidade</Text>
            </View>

            <View style={ESTILOS.form}>
                <View style={ESTILOS.produtos}>
                    <TouchableOpacity onPress={() => setModalVisible(true)} style={ESTILOS.buttonadd2}>
                        <Ionicons name="add-outline" size={44} color="black" style={ESTILOS.buttonadd} />
                    </TouchableOpacity>
                </View>
                {/* Rest of your form */}
            </View>

            <ModalScreen modalVisible={modalVisible} setModalVisible={setModalVisible} />
            
        </View>
    );
}


const ESTILOS = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
        paddingTop: 20,
    },
    buttonadd: {
        left: 40,
        top: 10,
        position: 'absolute',
    },
    inputform: {
        backgroundColor: '#D9D9D9',
        height: '14%',
        borderRadius: 8,
    },
    produtosform: {
        backgroundColor: '#D9D9D9',
        height: '14%',
        borderRadius: 8,
    },
    buttonadd2: {
        backgroundColor: '#D9D9D9',
        height: '14%',
        borderRadius: 8,
    },
    inputformesquerda: {
        backgroundColor: '#000',
        height: '14%',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    inputformmeio: {
        backgroundColor: '#000',
        height: '14%',
    },
    containerLogo: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    logo: {
        width: "30%",
        height: 90,
        right: 19.8,
    },
    inputsmodal: {
        top: 10,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    Titlemodal: {
        left: 55,
        top: 15,
    },

    textcabe: {
        color: '#fff',
        flex: 1,
        fontSize: 18,
        fontFamily: 'Itim',
        top: 20,
        width: '60%',
        left: 20,
    },
    textform: {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: 18,
        bottom: 10,
    },
    formtext: {
        alignItems: 'center',
    },
    cabecalho: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
    },
    buttonclose: {
        left: 240,
        bottom: 50,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    buttonback: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    quantidade: {
        width: '33%',
    },
    valor: {
        width: '33%',
    },
    produtos: {
        width: '33%',
    },
    form: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        marginBottom: 8,
        flex: 4,
        flexDirection: 'row-reverse',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#94a3b8',
        padding: 8,
        fontSize: 16,
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'blue',
        width: '90%',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 14,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    content: {
        backgroundColor: '#FFF',
        padding: 16,
        width: '100%',
        marginTop: 16,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 14
    },
    containerScroll: {
        width: '90%',
        marginTop: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        width: '80%',
        height: 400,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    inputModal: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        left: 40,
        height: '19%',
        backgroundColor: '#D9D9D9',
    },
    modalButton: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        left: 65,
        bottom: 30,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});