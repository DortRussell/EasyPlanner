import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../src/services/firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <Text>Login</Text>

      <TextInput placeholder="Email" onChangeText={setEmail} />
      <TextInput placeholder="Senha" secureTextEntry onChangeText={setPassword} />

      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Ir para cadastro" onPress={() => router.push("/register")} />
    </View>
  );
}