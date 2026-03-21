import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../src/services/firebase";

export default function Home() {
  const router = useRouter();
  const user = auth.currentUser;

  const handleLogout = async () => {
    await signOut(auth);
    router.replace("/");
  };

  return (
    <View>
      <Text>Bem-vindo!</Text>
      <Text>{user?.email}</Text>

      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}