import { Switch, View, TouchableOpacity, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { useColorScheme } from "nativewind";
import { useDispatch } from "react-redux";
import { showModel } from "../rtk/futusers/taskSlice";
import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/solid";

export default function HeaderCom({ searchInput, setSearchInput }) {
    const [isSearching, setIsSearching] = useState(false);
    const { toggleColorScheme, colorScheme } = useColorScheme();
    const dispatch = useDispatch();

    const handleClose = () => {
        setIsSearching(false);
        setSearchInput("");
    };

    return (
        <View className="h-14 justify-between border-b-2 border-slate-200 mb-3 items-center flex-row dark:border-gray-500 ">
            <TouchableOpacity
                onPress={() => dispatch(showModel())}
                className="bg-green-200 w-1/5 justify-center items-center rounded-md dark:bg-gray-500"
            >
                <Text className="text-lg font-medium dark:text-slate-200">
                    Add
                </Text>
            </TouchableOpacity>

            {isSearching && (
                <View className="flex-row justify-between items-center w-1/2 h-8 border-2 border-gray-400 rounded-md">
                    <TextInput
                        value={searchInput}
                        onChangeText={setSearchInput}
                        className="text-sm px-2 py-1 w-5/6"
                    />
                    <TouchableOpacity onPress={handleClose}>
                        <XMarkIcon color="#000" size={20} />
                    </TouchableOpacity>
                </View>
            )}

            <View className="flex-row justify-center items-center">
                {isSearching || (
                    <TouchableOpacity
                        className="mx-1"
                        onPress={() => {
                            setIsSearching(true);
                        }}
                    >
                        <MagnifyingGlassIcon color="#070707" size={30} />
                    </TouchableOpacity>
                )}

                <Switch
                    value={colorScheme === "light"}
                    onChange={toggleColorScheme}
                />
            </View>
        </View>
    );
}
