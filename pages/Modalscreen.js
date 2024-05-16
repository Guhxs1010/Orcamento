import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ModalScreen = ({ modalVisible, setModalVisible, handleAddDataToList }) => {
    const [selectedProduto, setSelectedProduto] = useState("");
    const [selectedQuantidade, setSelectedQuantidade] = useState("");
    const [selectedValor, setSelectedValor] = useState("");
    const navigation = useNavigation();

    const handleSave = () => {
        // Chama a função handleAddDataToList passando os dados inseridos
        handleAddDataToList(selectedProduto, selectedQuantidade, selectedValor);
        // Fecha o modal
        setModalVisible(false);
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
        >
            <View style={ESTILOS.modalContainer}>
                <View style={ESTILOS.modalContent}>
                    <View style={ESTILOS.Titlemodal}>
                        <Text style={[ESTILOS.modalTitle, { color: '#fff' }]}>Insira as Informações</Text>
                    </View>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Ionicons name="close" size={44} color="white" style={ESTILOS.buttonclose} />
                    </TouchableOpacity>

                    <View style={ESTILOS.inputsmodal}>
                        <TextInput
                            style={ESTILOS.inputModal}
                            placeholder="Valor R$"
                            onChangeText={(text) => {
                                const formattedText = text.replace(/[^0-9]/g, '');//para não aceitar letras
                                setSelectedValor(formattedText);
                            }}
                            value={selectedValor}
                        />
                        <TextInput
                            style={ESTILOS.inputModal}
                            placeholder="Quantidade"
                            onChangeText={(text) => {
                                const formattedText = text.replace(/[^0-9]/g, '');//para não aceitar letras
                                setSelectedQuantidade(formattedText);
                            }}
                            value={selectedQuantidade}
                        />
                        <TextInput
                            style={ESTILOS.inputModal}
                            placeholder="Produto"
                            onChangeText={(text) => {
                                const formattedText = text.replace(/[^a-zA-Z]/g, ''); // Aceita apenas letras
                                const limitedText = formattedText.slice(0, 9); // Limita o número de caracteres
                                setSelectedProduto(limitedText);
                            }}
                            value={selectedProduto}
                            maxLength={9} // Limita o número máximo de caracteres
                        />
                    </View>
                    <TouchableOpacity
                        style={ESTILOS.modalButton}
                        onPress={handleSave} // Chama a função handleSave ao pressionar o botão "Salvar"
                    >
                        <Text style={ESTILOS.modalButtonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
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
        top: 20,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        color: '#fff'
    },
    Titlemodal: {
        textAlign: 'center',
        alignItems: 'center',
        top: 35,
        color: '#fff'
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
        color: '#fff',
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
        backgroundColor: '#152128',
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
        backgroundColor: '#06C167',
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
    logo: {
        width: "30%",
        bottom: 490,
        right: 10,
    },
});

export default ModalScreen;
