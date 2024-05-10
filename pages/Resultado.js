import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Platform, StatusBar,
    ScrollView,
    ActivityIndicator,
    Alert,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { useRoute } from '@react-navigation/native';


export default function Resultado() {
    
        const route = useRoute();
        const { produto, quantidade, valor } = route.params;
    
       
    
    const [fontsLoaded] = useFonts({
        'Itim': require('../assets/fonts/Itim-Regular.ttf')
    });
    const [fontsLoaded2] = useFonts({
        'Inter': require('../assets/fonts/Inter.ttf')
    });
// entrada com borda junta
    if (!fontsLoaded) {
        return null;
    }
    if (!fontsLoaded2) {
        return null;
    }
    const navigation = useNavigation();

    const [load, defLoad] = useState(false);
    const [valores, defvalores] = useState("");

    const [prod1, defprod1] = useState("");
    const [prod2, defprod2] = useState("");
    const [prod3, deprod3] = useState("");
    const [prod4, defprod4] = useState("");

    const [valor1, defvalor1] = useState("");
    const [valor2, defvalor2] = useState("");
    const [valor3, defvalor3] = useState("");
    const [valor4, defvalor4] = useState("");

    const [quant1, defquant1] = useState("");
    const [quant2, defquant2] = useState("");
    const [quant3, defquant3] = useState("");
    const [quant4, defquant4] = useState("");

x
    return (
        <View style={ESTILOS.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#F1F1F1" />


            <View style={ESTILOS.cabecalho}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={ESTILOS.buttonback}>
                    <Ionicons name="chevron-back-outline" size={44} color="white" ></Ionicons>
                </TouchableOpacity>
                <Text style={ESTILOS.textcabe}>Insira os valores, os produtos e quantidade</Text>
            </View>

            
                <View style={ESTILOS.form}>
                    <View style={ESTILOS.produtos}>
                    <View style={ESTILOS.formtext}>
                        <Text style={ESTILOS.textform}>Produtos</Text>
                        </View>
                        <Text style={ESTILOS.inputform}>{produto}</Text>
                    </View>
                    <View style={ESTILOS.quantidade}>
                    <View style={ESTILOS.formtext}>
                        <Text style={ESTILOS.textform}>Quantidade</Text>
                        </View>
                        <Text style={ESTILOS.inputformmeio}>{quantidade}</Text>
                    </View>
                    <View style={ESTILOS.valor}>
                    <View style={ESTILOS.formtext}>
                        <Text style={ESTILOS.textform}>Valor</Text>
                        </View>
                        <Text style={ESTILOS.inputformesquerda}>{valor}</Text>
                    </View>
                </View>
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
    inputform:{
        backgroundColor:'#000',
        height:'14%',
        borderBottomRightRadius:8,
        borderTopRightRadius:8,
        color:'#fff',
    },
    inputformesquerda:{
        backgroundColor:'#000',
        height:'14%',
        borderBottomLeftRadius:8,
        borderTopLeftRadius:8,
        color:'#fff',
    },
    inputformmeio:{
        backgroundColor:'#000',
        height:'14%',
        color:'#fff',
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
        bottom:10,
    },
    formtext:{
        alignItems:'center',
    },
    cabecalho: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        paddingTop: 20,
        width: '100%',
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
    quantidade:{
        width: '33%',
    },
    valor:{
        width: '33%',
    },
    produtos:{
        width: '33%',
    },
    form: {
        width: '100%',
        borderRadius: 8,
        padding: 16,
        marginTop: 16,
        marginBottom: 8,
        flex: 4,
        flexDirection:'row-reverse',
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
    }
})