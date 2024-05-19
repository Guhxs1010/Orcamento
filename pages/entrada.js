import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, FlatList, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalScreen from '../pages/Modalscreen';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [totalValue, setTotalValue] = useState(0);

    // Função para adicionar os dados à lista
    const handleAddDataToList = (produto, quantidade, valor) => {
        setDataList([...dataList, { produto, quantidade, valor }]);
    };

    // Função para remover um item da lista
    const handleRemoveItem = (index) => {
        const updatedList = [...dataList];
        updatedList.splice(index, 1); // Remove o item do array
        setDataList(updatedList); // Atualiza a lista
    };

    // Função para calcular o valor total dos itens na lista
    const calculateTotalValue = () => {
        let total = 0;
        dataList.forEach(item => {
            total += parseFloat(item.valor); // Converte o valor para número e adiciona ao total
        });
        setTotalValue(total.toFixed(2)); // Define o valor total com duas casas decimais
    };

    // Atualiza o valor total sempre que a lista de dados for atualizada
    useEffect(() => {
        calculateTotalValue();
    }, [dataList]);

    // Função para navegar para a tela de sucesso
    const handleFinalizar = () => {
        navigation.navigate('TelaSucesso', { totalValue });
    };

    return (
        <View style={ESTILOS.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#fff" />

            <View style={ESTILOS.cabecalho}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={ESTILOS.buttonback}>
                    <Ionicons name="chevron-back-outline" size={44} color="white" />
                </TouchableOpacity>
                <Text style={ESTILOS.textcabe}>Insira os valores, os produtos e quantidade</Text>
            </View>

            <View style={ESTILOS.formcontainer}>
                <View style={ESTILOS.formtext}>
                    <Text style={ESTILOS.textform}>Valor</Text>
                </View>
                <View style={ESTILOS.formtext}>
                    <Text style={ESTILOS.textform}>Quantidade</Text>
                </View>
                <View style={ESTILOS.formtext}>
                    <Text style={ESTILOS.textform}>Produto</Text>
                </View>
            </View>

            <View style={ESTILOS.FlatList}>
                <FlatList
                    data={dataList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <View style={ESTILOS.flat}>
                            <View style={ESTILOS.formflat}>
                                <View style={ESTILOS.produtos}>
                                    <View style={ESTILOS.inputform}>
                                        <Text style={ESTILOS.textoprod}>{item.produto}</Text>
                                    </View>
                                </View>

                                <View style={ESTILOS.quantidade}>
                                    <View style={ESTILOS.inputformmeio}>
                                        <Text style={ESTILOS.texto}>{item.quantidade}</Text>
                                    </View>
                                </View>

                                <View style={ESTILOS.valor}>
                                    <View style={ESTILOS.inputformesquerda}>
                                        <Text style={ESTILOS.texto}>{item.valor}</Text>
                                        <TouchableOpacity onPress={() => handleRemoveItem(index)} style={ESTILOS.buttonremove}>
                                            <Ionicons name="trash-sharp" size={27} color="#06C167" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                />
            </View>

            <View style={ESTILOS.form}>
                {/* Botão Adicionar */}
                <View style={ESTILOS.caixabotao}>
                    <View style={ESTILOS.botaoadd}>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={ESTILOS.buttonadd2}>
                            <Ionicons name="add-outline" size={44} color="#fff" style={ESTILOS.buttonadd} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Botão Finalizar dentro da Caixa do Formulário */}
                <View style={ESTILOS.finalizar}>
                    <View style={ESTILOS.textoform90}>
                        <Text style={ESTILOS.formtexto}>Valor Total: R$ {totalValue}</Text>
                    </View>

                    <TouchableOpacity onPress={handleFinalizar} style={ESTILOS.finalizarbotao}>
                        <Text style={ESTILOS.botaofinalizar}>Finalizar</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Modal */}
            <ModalScreen modalVisible={modalVisible} setModalVisible={setModalVisible} handleAddDataToList={handleAddDataToList} />
        </View>
    );
}

const ESTILOS = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
    },

    formtexto: {
        color: '#fff',
        fontSize: 22,
        fontFamily: 'Itim',
    },
    texto: {
        top: 20,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    textoprod: {
        top: 20,
        fontSize: 18,
        right: 22,
        color: 'white',
    },
    FlatList: {
        flex: 4,
    },
    buttonremove: {
        left: 325,
        bottom: 6,
    },
    produtosform: {
        backgroundColor: '#D9D9D9',
        height: '14%',
        borderRadius: 8,
    },
    inputform: {
        backgroundColor: '#152128',
        height: '14%',
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        color: '#fff',
        alignItems: 'center',
    },
    buttonadd2: {
        backgroundColor: '#06C167',
        width: '50%',
        height: '12%',
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',

    },
    inputformesquerda: {
        backgroundColor: '#152128',
        color: '#fff',
        height: '14%',
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
    },
    inputformmeio: {
        backgroundColor: '#152128',
        height: '14%',
        color: '#fff',
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
        margin: 20,
    },
    formcontainer: {
        flex: 1,
        top: 10,
        flexDirection: 'row',
    },
    cabecalho: {
        flex: 1.2,
        backgroundColor: '#152128',
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
        flex: 2.3,
        top: 50,
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#152128',
        paddingVertical: 20, // Adicionado para dar espaço para o botão "Finalizar"
    },
    botaofinalizar: {
        color: '#152128',
        bottom:2,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Itim',
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
    quantidade: {
        width: '33%',
        height: 500,
    },
    valor: {
        width: '33%',
        height: 500,
    },
    produtos: {
        width: '33%',
        height: 500,
    },
    caixabotao: {
        alignItems: 'center',
        justifyContent: 'flex-start', // Ajuste para manter o botão Adicionar visível
        marginTop: 20, // Adicione margem superior para manter o botão Adicionar visível
    },
    botaoadd: {
        width: '35%',
        height:550,
        alignItems: 'center',
        bottom:72,
    },
    finalizar: {
        alignItems: 'flex-start',
        left:50,
        bottom:525,
    },
    finalizarbotao: {
        backgroundColor: '#fff',
        width:'70%',
        height:45,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 20,
        top:15,
        alignItems: 'center',
        justifyContent:'center',
        textAlign:'center',
        left:10,
    },
    formflat: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        flexDirection: 'row-reverse',
        height: 90,
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
