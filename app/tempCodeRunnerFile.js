import React, { useState } from "react";
import { Text, View, Button } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={{ marginTop: 50, alignItems: "center" }}>
      <Text>Contador: {contador}</Text>

      <Button
        title="Aumentar"
        onPress={() => setContador(contador + 1)}
      />
    </View>
  );
}