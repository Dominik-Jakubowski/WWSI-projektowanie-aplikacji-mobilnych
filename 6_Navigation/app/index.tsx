import { Stack } from "expo-router";
import PlayerList from "../components/PlayerList";

export default function CricketHome() {
    return (
        <>
            <Stack.Screen options={{ title: "Indian Cricket Team" }} />
            <PlayerList />
        </>
    );
}
