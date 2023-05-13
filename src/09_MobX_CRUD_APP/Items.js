import React from "react";
import { observer } from "mobx-react-lite";
import { Box, DeleteIcon, HStack, Text } from "native-base";
import { todo } from "./MobX";
import { Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const { width } = Dimensions.get("screen");
export const Item = observer(() => {
    const navigation = useNavigation();

    return (
        <>
            {todo.todos.map((item, i) => (
                <HStack
                    key={i}
                    width={width - 20}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    bg={"light.200"}
                    marginY={2}
                    marginX={3}
                    paddingX={2}
                    borderRadius={5}
                >
                    <Box>
                        <Text fontSize={20} color={"dark.200"}>
                            {item.title}
                        </Text>
                        <Text fontSize={15} color={"dark.200"}>
                            {item.disc}
                        </Text>
                    </Box>
                    <HStack alignItems={"center"}>
                        <TouchableOpacity onPress={() => todo.delete(i)}>
                            <DeleteIcon
                                size={"8"}
                                style={{ color: "#ff0000ad" }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate("Input", {
                                    title: item.title,
                                    disc: item.disc,
                                    index: i,
                                })
                            }
                        >
                            <Text>Edit</Text>
                        </TouchableOpacity>
                    </HStack>
                </HStack>
            ))}
        </>
    );
});
