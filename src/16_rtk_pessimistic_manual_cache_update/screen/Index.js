import { FlatList, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { TrashIcon, PencilSquareIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import {
    useDeleteTaskMutation,
    useGetTaskQuery,
} from "../rtk/futusers/taskSliceApi";
import HeaderCom from "./HeaderCom";
import ModelCom from "./ModelCom";
import { useDispatch } from "react-redux";
import { showModel } from "../rtk/futusers/taskSlice";

export default function Index() {
    const [task, setTask] = useState();
    const [updateMode, setUpdateMode] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [updateId, setUpdateId] = useState(null);
    const { colorScheme } = useColorScheme();
    const dispatch = useDispatch();
    const { data: taskData, isError, isSuccess, isLoading } = useGetTaskQuery();

    const [deleteTask, {}] = useDeleteTaskMutation();

    const handleDelete = (id) => {
        deleteTask(id);
    };
    const handleEdit = (data) => {
        setTask(data.title);
        setUpdateId(data.id);
        setUpdateMode(true);
        dispatch(showModel());
    };

    const onEndReached = () => {
        console.log("onEndReached");
    };

    let content = null;
    if (isError) {
        content = <Text>Something wrong</Text>;
    }
    if (isLoading) {
        content = <Text>Loading ...</Text>;
    }
    if (isSuccess) {
        content = (
            <FlatList
                onEndReached={onEndReached}
                // ListFooterComponent={<Text>Loading..</Text>}
                data={taskData?.newTask?.filter((fd) =>
                    fd.title.toLowerCase().includes(searchInput.toLowerCase())
                )}
                keyExtractor={(item) => item?.id}
                renderItem={({ item }) => (
                    <View className="w-full h-14 bg-green-100 rounded-lg my-3 justify-center px-3 dark:bg-gray-700">
                        <View className="flex-row justify-between">
                            <Text
                                numberOfLines={1}
                                className="font-medium text-lg text-gray-700 dark:text-slate-100"
                            >
                                {item.title}
                            </Text>
                            <View className="flex-row ">
                                <TouchableOpacity
                                    className="mx-1"
                                    onPress={() =>
                                        handleEdit({
                                            title: item.title,
                                            id: item.id,
                                        })
                                    }
                                >
                                    <PencilSquareIcon
                                        color={
                                            colorScheme === "dark"
                                                ? "#020617"
                                                : "#000"
                                        }
                                        size={30}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    className="mx-1"
                                    onPress={() => handleDelete(data.id)}
                                >
                                    <TrashIcon color="red" size={30} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
        );
    }

    return (
        <View className="flex-1   bg-green-50 dark:bg-gray-800 mt-3 px-3">
            <StatusBar
                style={colorScheme === "light" ? "dark" : "light"}
                backgroundColor={
                    colorScheme === "light" ? "#f0fdf4" : "#1f2937"
                }
            />
            <HeaderCom
                searchInput={searchInput}
                setSearchInput={setSearchInput}
            />
            <ModelCom
                task={task}
                setTask={setTask}
                updateMode={updateMode}
                updateId={updateId}
                setUpdateMode={setUpdateMode}
            />
            {content}
        </View>
    );
}
