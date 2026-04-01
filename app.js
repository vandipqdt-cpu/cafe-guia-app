import React, { useState, useEffect } from "react";
import { Text, View, Button, TextInput, ScrollView } from "react-native";

export default function App() {
  const [tela, setTela] = useState("menu");
  const [tempo, setTempo] = useState(0);
  const [rodando, setRodando] = useState(false);
  const [cafe, setCafe] = useState("");
  const [agua, setAgua] = useState("");

  useEffect(() => {
    let intervalo;
    if (rodando) {
      intervalo = setInterval(() => setTempo((t) => t + 1), 1000);
    }
    return () => clearInterval(intervalo);
  }, [rodando]);

  const calcularAgua = () => {
    const resultado = cafe * 16;
    setAgua(resultado.toString());
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>☕ Guia de Café</Text>
      <Text>Cronômetro: {tempo}s</Text>
      <Button title="Iniciar" onPress={() => setRodando(true)} />
      <Button title="Parar" onPress={() => setRodando(false)} />
      <Button title="Resetar" onPress={() => setTempo(0)} />

      <Text style={{ marginTop: 20 }}>Calculadora</Text>
      <TextInput
        placeholder="Gramas de café"
        keyboardType="numeric"
        value={cafe}
        onChangeText={setCafe}
      />
      <Button title="Calcular água" onPress={calcularAgua} />
      <Text>Água: {agua} ml</Text>
    </View>
  );
}
