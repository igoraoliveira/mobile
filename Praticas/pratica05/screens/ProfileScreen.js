import { StyleSheet, ScrollView, View } from "react-native";
import { Avatar, Card, Button, List, Text } from "react-native-paper";

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.profileSection}>
        <Avatar.Image
          size={100}
          source={{ uri: "https://picsum.photos/200" }} style={styles.profileImage}
        />
        <Card>
          <Card.Content>
            <Text variant="titleLarge">Igor Almeida</Text>
            <Text variant="bodyMedium">igor3108almeida@gmail.com</Text>
            <Text variant="bodyMedium">(61) 99605-9417</Text>
          </Card.Content>
        </Card>
        <Button mode="contained" onPress={() => {}} style={styles.button}>Editar Perfil</Button>
        <List.Section>
          <List.Subheader style={styles.sectionTitle}>Configurações da Conta</List.Subheader>
          <List.Item
            title="Privacidade"
            left={() => <List.Icon icon="lock" />}
            onPress={() => {}}
          />
          <List.Item
            title="Notificações"
            left={() => <List.Icon icon="bell" />}
            onPress={() => {}}
          />
        </List.Section>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: 24 },
    profileSection: { flexGrow: 1, padding: 16, },
    profileImage: { alignSelf: "center", marginBottom: 16 },
    button: { marginTop: 16, },
    sectionTitle: { fontSize: 16, fontWeight: "bold" },

});


export default ProfileScreen;
