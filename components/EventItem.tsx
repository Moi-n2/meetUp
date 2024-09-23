import Feather from "@expo/vector-icons/Feather";
import { View, Text, Image } from "react-native";
import dayjs from "dayjs";

const EventItem = ({ event }) => {
  const { id, datetime, title, image, description, location } = event;

  const formateDate = (date) => {
    return dayjs(date).format("ddd, D MMM · h:mm A");
  };
  return (
    <View className="gap-2 p-3 mb-1  border-b-2 border-gray-100">
      <View className="flex-row gap-1">
        <View className="flex-1 gap-2">
          <Text className="text-lg font-semibold uppercase text-amber-800">
            {formateDate(datetime)}
          </Text>
          <Text className="text-xl font-bold" numberOfLines={2}>
            {title}
          </Text>
          <Text className="text-gray-700"> {location}</Text>
        </View>

        <Image
          source={{
            uri: image,
          }}
          className="aspect-video w-2/5 rounded-xl"
        />
      </View>

      <View className="flex-row gap-3">
        <Text className="mr-auto text-gray-700">16 going</Text>
        <Feather name="share" size={20} color="gray" />
        <Feather name="bookmark" size={20} color="gray" />
      </View>
    </View>
  );
};

export default EventItem;
