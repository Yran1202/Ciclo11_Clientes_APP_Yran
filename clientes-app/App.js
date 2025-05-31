import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View,  ActivityIndicator,SafeAreaView, FlatList } from 'react-native';
import { getAllClients } from './lib/restClient.js'; // Adjust the path as necessary

export default function App() {


  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getAllClients().then((data) => {
      setClientes(data);
    });
    console.log("Clientes:", clientes);
  }, []);


  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />

      <SafeAreaView>
        {clientes.length === 0 ? (
          <ActivityIndicator size={"large"} />
        ) : (
          <FlatList
            data={clientes}
            keyExtractor={(item) => item.correo}
            renderItem={({ item }) => (
              <View>
                <Text>{item.nombre}</Text>
                <Text>{item.apellido}</Text>
              </View>
            )}
          />
        )}
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
