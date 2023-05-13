import React, { useEffect, useRef, useState } from "react";
import { Button, Input, Stack } from "native-base";
import { todo } from "./MobX";

export default function InputView({ navigation, route }) {
    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);

    const updateIndex = useRef();

    const handleSubmit = () => {
        isUpdate
            ? todo.update(updateIndex.current, input1, input2)
            : todo.add(input1, input2);
        navigation.goBack();
    };

    useEffect(() => {
        if (route.params !== undefined) {
            setinput1(route.params.title);
            setinput2(route.params.disc);
            setIsUpdate(true);
            updateIndex.current = route.params.index;
        }
    }, []);

    return (
        <Stack flex={1} justifyContent={"center"}>
            <Input value={input1} onChangeText={setinput1} />
            <Input value={input2} onChangeText={setinput2} />
            <Button onPress={handleSubmit}>
                {isUpdate ? "Update" : "Create"}
            </Button>
        </Stack>
    );
}
