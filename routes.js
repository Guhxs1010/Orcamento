import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';
import Acesso from './pages/entrada';
import Resultado from './pages/Resultado';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                component={Bem_Vindo} />

            <Stack.Screen
                name="entrada"
                component={Acesso} />
            <Stack.Screen
                name="Resultado"
                component={Resultado} />
        </Stack.Navigator>
    );
}
