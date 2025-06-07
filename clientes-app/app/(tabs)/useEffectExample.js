import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Pressable, FlatList } from "react-native";



export default function UseEffectExample() {

    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        
        const interval = setInterval(() => {
            setSegundos(prevSegundos => prevSegundos + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Segundos transcurridos: {segundos}</Text>
            <Pressable style={styles.pressable} onPress={() => setSegundos(0)}>
                <Text>Reiniciar</Text>
            </Pressable>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 22,
    },
  });