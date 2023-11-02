import { Heading, FlatList, Text, Center, Image, ScrollView } from "@gluestack-ui/themed";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack="true" />

      <ScrollView>
        <Image source={{ uri: params.image }} w="$full" h="$2/6" alt="Image Data"/>
        <Text m={'4'}>{params.date}</Text>
        <Heading p={"4"}>{params.title}</Heading>
        <Text p={"4"}>{params.content}</Text>
      </ScrollView>
    </>
  );
};

export default NewsDetail;