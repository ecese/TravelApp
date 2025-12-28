import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Places</Text>

      <Button
        title="Go to Paris"
        onPress={() =>
          navigation.navigate('Details', { place: 'Paris', rating: 5 })
        }
      />

      <View style={{ height: 10 }} />

      <Button
        title="Go to London"
        onPress={() =>
          navigation.navigate('Details', { place: 'London', rating: 4 })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
