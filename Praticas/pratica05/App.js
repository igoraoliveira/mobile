import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./screens/TaskScreen";
import LoginScreen from "./screens/LoginScreen";
import ChatScreen from "./screens/ChatScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";

function App() {
  return (
    <SafeAreaProvider>
     <ProfileScreen />
    </SafeAreaProvider>
  );
}

export default App;
