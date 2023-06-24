import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Button from "./ButtonCom";
import { width } from "./constants";
import { Input } from "native-base";
import { todoStore } from "./store/todoStore";
import { observer } from "mobx-react-lite";

export default function Home({ navigation }) {
    const [input, setInput] = useState("");
    const [inputType, setInputType] = useState("add");

    const handleTodo = () => {
        todoStore.setTodo(input);
        setInput("");
    };

    const updateTodo = (data, index) => {
        setInput(data);
        setInputType(index + "-" + "update");
    };

    const Todo = observer(() =>
        todoStore.getTodo?.map((data, index) => (
            <View key={index} style={styles.containerItem}>
                <Text>{data}</Text>
                <View style={styles.btn}>
                    <TouchableOpacity onPress={() => updateTodo(data, index)}>
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => todoStore.deleteTodo(index)}
                    >
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>
            </View>
        ))
    );

    return (
        <View style={styles.container}>
            <Input value={input} onChangeText={setInput} />
            <TouchableOpacity
                onPress={() =>
                    todoStore.updateTodo(input, inputType.split("-")[0])
                }
            >
                {inputType !== "add" && <Text>Update</Text>}
            </TouchableOpacity>
            <ScrollView>
                {/* TODO */}
                <Todo />
            </ScrollView>

            <View style={styles.btnBody}>
                <Button
                    text="Screen 02"
                    onPress={() => navigation.navigate("SCREEN02")}
                />
                <Button text="Add Todo" onPress={handleTodo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    btnBody: {
        position: "absolute",
        width: width,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        bottom: 10,
    },
    containerItem: {
        height: 50,
        width: "100%",
        backgroundColor: "#C2DEDC",
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        flexDirection: "row",
    },
    btn: {
        flexDirection: "row",
        columnGap: 10,
    },
});
