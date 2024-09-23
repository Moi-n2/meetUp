import { Stack } from "expo-router";
import { FlatList } from "react-native";

import events from "~/assets/events.json";
import EventItem from "~/components/EventItem";

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: "Events" }} />

      <FlatList
        className="bg-white"
        data={events}
        renderItem={({ item }) => <EventItem event={item} />}
      />
    </>
  );
}
