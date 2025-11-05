import { Text, View, StyleSheet, Button } from "react-native";
import { theme } from "@/theme";
import { use } from "react";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";

export default function Onboardingcreen(){
    const router = useRouter();
    const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded)
    const handlePress = () => {
        toggleHasOnboarded();
        router.replace("/")

    };
        return (

            <View style = {styles.container}>
                <Button title = "let me in" onPress={handlePress}/>
            </View>
        )
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colorWhite,
    },
    text: {
        fontSize: 24
    }
   })