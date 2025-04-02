import { SafeAreaProvider } from "react-native-safe-area-context";
import TaskScreen from "./contexts/TaskContext";

function App() {
  return <SafeAreaProvider>
    <TaskScreen />
  </SafeAreaProvider>;
}

export default App;
