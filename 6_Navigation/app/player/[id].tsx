import { View, Text, Image } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import players from "../../data/players";

export default function PlayerDetails() {
    const { id } = useLocalSearchParams();
    const player = players[Number(id)];

    if (!player) return <Text>Player not found</Text>;

    return (
        <>
            <Stack.Screen options={{ title: player.name }} />
            <View>
                <Image source={{ uri: player.image }} style={{ width: 200, height: 200 }} />
                <Text>{player.name}</Text>
                <Text>Age: {player.age}</Text>
                <Text>Role: {player.style}</Text>
            </View>
        </>
    );
}
