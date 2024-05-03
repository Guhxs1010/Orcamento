import { createStackNavigator } from '@react-navigation/stack';
import Bem_Vindo from './pages/index';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="index"
                component={Bem_Vindo} />

        </Stack.Navigator>
    );
}
