import {View, ScrollView, StyleSheet} from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

function RecoverScreen({ navigation }) {
    return(
    <ScrollView contentContainerStyle={styles.container}>
        <TextInput label="E-mail" mode="outlined" style={styles.input} />
    </ScrollView>
    )
}

export default RecoverScreen;