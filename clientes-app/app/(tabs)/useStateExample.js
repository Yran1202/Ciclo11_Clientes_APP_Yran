import React, { useState } from "react";
import { View, StyleSheet, Text, Pressable, FlatList } from "react-native";



export default function UseStateExample() {


    const [contador, setContador] = useState(0);
    const [nombres, setNombres] = useState(['Juan', 'Ana', 'Pedro']); 
    

    const agregarNombre = () => {       
        const nuevoNombre =[...nombres, `Nuevo ${nombres.length + 1}`];
        setNombres(nuevoNombre);
    }

    return (
        <View style={styles.container}>
            
                <Text style={styles.text}>Contador useState: {contador}</Text>


            <View style={{ flexDirection: 'row', alignItems: 'center',  gap: 10 }}>
                <Pressable style={styles.pressable} 
                    onPress ={() => {
                        setContador(contador - 1);
                        
                    }}
                >
                    <Text>-1</Text>
                </Pressable>
                <Pressable style={styles.pressable} 
                    onPress ={() => {
                        setContador(contador + 1);
                        
                    }}
                >
                    <Text>+1</Text>
                </Pressable>
            </View>
        
            <View style={{ flex: 1, alignItems: 'center',  gap: 10, marginTop: 50 }}>

            
                <Text style={styles.text}>Lista de Nombres</Text>

                <FlatList 
                data={nombres}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
                />

                <Pressable style={styles.pressable}
                    onPress={agregarNombre}
                >
                    <Text>Agregar Nombre</Text>
                </Pressable>

            </View>



        </View>
    ); 
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black',
        marginBottom: 20,
    },
    pressable: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
});