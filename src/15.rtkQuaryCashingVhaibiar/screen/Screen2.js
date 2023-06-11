import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "native-base";
import { useUpdatePostMutation } from "../rtk/features/api/apiSlice";

export default function Screen2({ navigation, route }) {
    const [inputValue, setInputValue] = useState("");
    const [updatePost, { isError, isLoading, isSuccess }] =
        useUpdatePostMutation();
    const { data, id } = route.params;

    useEffect(() => {
        setInputValue(data);
    }, []);

    const handleUpdateData = () => {
        updatePost({ inputValue, id });
    };

    let content = null;

    if (isError) content = <Text>Error </Text>;
    if (isLoading) content = <Text> Loading.. </Text>;
    if (isSuccess) content = <Text> Success </Text>;
    if (isSuccess) {
        navigation.goBack();
    }

    return (
        <View>
            <Input value={inputValue} onChangeText={setInputValue} />
            <Pressable onPress={handleUpdateData}>
                <Text>Update</Text>
            </Pressable>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({});
