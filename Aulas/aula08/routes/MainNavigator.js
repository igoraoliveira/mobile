import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import CriarConta from "../screens/CriarConta";
import RecuperarSenha from "../screens/RecuperarSenha";

const Stack = createNativeStackNavigator();

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Recuperar senha">
      <Stack.Screen name="Login" component={CriarConta} />
      <Stack.Screen name="Criar conta" component={CriarConta} />
      <Stack.Screen name="Recuperar senha" component={RecuperarSenha} />
    </Stack.Navigator>
  );
}

export default MainNavigator;
