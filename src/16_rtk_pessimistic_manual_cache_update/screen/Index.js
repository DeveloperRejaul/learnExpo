import React, { useState, useRef, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { Spinner } from "native-base";
import { useColorScheme } from "nativewind";
import { TrashIcon, PencilSquareIcon } from "react-native-heroicons/solid";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import {
    taskApi,
    useDeleteTaskMutation,
    useGetTaskQuery,
} from "../rtk/futusers/taskSliceApi";
import HeaderCom from "./HeaderCom";
import ModelCom from "./ModelCom";
import { setSearchTask, showModel } from "../rtk/futusers/taskSlice";

export default function Index() {
    const [task, setTask] = useState();
    const [updateMode, setUpdateMode] = useState(false);
    const [moreData, setMoreData] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [updateId, setUpdateId] = useState(null);
    const { colorScheme } = useColorScheme();
    const { isSearch } = useSelector((state) => state.task);
    const { searchTask } = useSelector((state) => state.task);
    const dispatch = useDispatch();
    const {
        data: taskData,
        isError,
        isSuccess,
        isLoading,
        refetch,
    } = useGetTaskQuery();
    const [deleteTask, {}] = useDeleteTaskMutation();
    const totalPages = useRef([]);
    const timeOutID = useRef();
    const page = useRef(0);
    var limit = 10;
    let content = null;

    useEffect(() => {
        if (isSuccess) {
            totalPages.current = Math.ceil(taskData.totalLength / limit);
        }
    }, [isSuccess]);

    const handleSearch = (value) => {
        setSearchInput(value);

        if (value.length > 0) {
            clearTimeout(timeOutID.current);
            timeOutID.current = setTimeout(async () => {
                try {
                    dispatch(taskApi.endpoints.getTaskByValue.initiate(value))
                        .unwrap()
                        .then((res) => {
                            dispatch(setSearchTask(res.newTask));
                        });
                } catch (error) {}
            }, 500);
        }
    };

    const handleFilter = (fd) => {
        return fd.title.toLowerCase().includes(searchInput.toLowerCase());
    };

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
        page.current = page.current + 1;
        if (page.current < totalPages.current) {
            setMoreData(true);
            dispatch(
                taskApi.endpoints.getTaskPerPage.initiate({
                    page: page.current,
                    limit,
                })
            );
        } else {
            setMoreData(false);
        }
    };

    if (isError) {
        content = <Text>Something wrong</Text>;
    }
    if (isLoading) {
        content = (
            <Spinner
                size={"lg"}
                accessibilityLabel="Loading posts"
                alignSelf={"center"}
            />
        );
    }
    if (isSuccess) {
        content = (
            <FlatList
                showsVerticalScrollIndicator={false}
                onEndReached={onEndReached}
                ListFooterComponent={
                    moreData && (
                        <Spinner
                            size={"lg"}
                            accessibilityLabel="Loading posts"
                        />
                    )
                }
                data={taskData?.newTask}
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
                                    onPress={() =>
                                        handleDelete({ id: item.id })
                                    }
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
    if (isSearch) {
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
                setSearchInput={(text) => handleSearch(text)}
                page={page.current}
            />
            <ModelCom
                task={task}
                setTask={setTask}
                updateMode={updateMode}
                updateId={updateId}
                setUpdateMode={setUpdateMode}
            />

            {isSearch && (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={searchTask}
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
                                        onPress={() =>
                                            handleDelete({
                                                id: item.id,
                                                inputValue: searchInput,
                                            })
                                        }
                                    >
                                        <TrashIcon color="red" size={30} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    )}
                />
            )}

            {isSearch || content}
        </View>
    );
}
