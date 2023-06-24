import {
    FlatList,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import React from "react";
import {
    useDeletePostMutation,
    useGetPostQuery,
} from "../rtk/features/api/apiSlice";
import { HStack } from "native-base";
import Model from "./Model";

export default function Sreeen1({ navigation }) {
    const { data: task, isError, isLoading, isSuccess } = useGetPostQuery();
    const [deleteTask, { DisError, DisLoading, DisSuccess }] =
        useDeletePostMutation();

    let content = null;

    if (isError) content = <Text>Error </Text>;
    if (isLoading) content = <Text> Loading.. </Text>;
    if (isSuccess) content = <Text> Success </Text>;

    if (DisError) content = <Text>Error </Text>;
    if (DisLoading) content = <Text> Loading.. </Text>;
    if (DisSuccess) content = <Text> Success </Text>;

    return (
        <View>
            {content}
            <FlatList
                data={task?.newTask}
                renderItem={({ item, index }) => (
                    <HStack
                        key={index}
                        style={styles.item}
                        justifyContent={"space-between"}
                    >
                        <Text>{item.title}</Text>
                        <HStack space={"2"}>
                            <TouchableOpacity
                                onPress={() =>
                                    navigation.navigate("screen2", {
                                        data: item.title,
                                        id: item._id,
                                    })
                                }
                            >
                                <Text>Edit</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => deleteTask(item._id)}
                            >
                                <Text>Delete</Text>
                            </TouchableOpacity>
                        </HStack>
                    </HStack>
                )}
            />
            <Model />
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 5,
        backgroundColor: "#ddd",
    },
});
