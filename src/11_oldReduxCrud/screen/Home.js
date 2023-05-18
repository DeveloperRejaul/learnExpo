import { TouchableOpacity } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import {
    Box,
    Icon,
    Input,
    Stack,
    VStack,
    Text,
    HStack,
    FlatList,
    useToast,
    Radio,
} from "native-base";
import {
    createData,
    deleteData,
    fetchData,
    updateData,
} from "../api/thankApiOparation";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import SpinnerCom from "../components/Spnner";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [isUpdate, setIsUpdate] = useState(false);
    const updatedDataID = useRef();
    const { isLoading, tasks, error } = useSelector((state) => state.tasks);
    const { value } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const toast = useToast();

    useEffect(() => {
        dispatch(fetchData);
        if (error) {
            toast.show({
                description: error,
                bgColor: "green.700",
            });
        }
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteData(id));
        if (error) {
            toast.show({
                description: error,
                bgColor: "green.700",
            });
        }
    };

    const handleCreateData = () => {
        if (inputValue !== "" && !isUpdate) {
            dispatch(createData(inputValue));
        }
        if (inputValue !== "" && isUpdate) {
            dispatch(
                updateData({ title: inputValue, id: updatedDataID.current })
            );
        }
        setInputValue("");
        if (error) {
            toast.show({
                description: error,
                bgColor: "green.700",
            });
        }
    };

    const handleUpdateData = (data, id) => {
        setInputValue(data);
        setIsUpdate(true);
        updatedDataID.current = id;
    };

    return (
        <Stack flex={1} mt={5} px={5}>
            <Text>count {value}</Text>
            <VStack w="100%" space={5} alignSelf="center">
                <Input
                    placeholder="Search"
                    variant="filled"
                    width="100%"
                    borderRadius="10"
                    py="1"
                    px="2"
                    value={inputValue}
                    onChangeText={setInputValue}
                    InputRightElement={
                        <Icon
                            ml="2"
                            size="10"
                            color="dark.200"
                            bg={"blue.100"}
                            onPress={handleCreateData}
                            as={<Ionicons name="add-sharp" size={10} />}
                        />
                    }
                />

                {isLoading ? (
                    <SpinnerCom />
                ) : (
                    <FlatList
                        data={tasks}
                        renderItem={({ item }) => (
                            <HStack
                                key={item._id}
                                px={2}
                                py={2}
                                bg={"blue.100"}
                                my={2}
                                borderRadius={5}
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Box>
                                    <Text numberOfLines={1}>{item.title}</Text>

                                    <TouchableOpacity>
                                        <Text
                                            bg={"blue.500"}
                                            textAlign={"center"}
                                            borderRadius={5}
                                            w={100}
                                        >
                                            {item.complete
                                                ? "Complete"
                                                : "Incomplete"}
                                        </Text>
                                    </TouchableOpacity>
                                </Box>

                                <HStack>
                                    <TouchableOpacity
                                        onPress={() =>
                                            handleUpdateData(
                                                item.title,
                                                item._id
                                            )
                                        }
                                    >
                                        <Feather
                                            name="edit"
                                            size={25}
                                            color={"#008cffda"}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => handleDelete(item._id)}
                                    >
                                        <MaterialIcons
                                            name="delete-outline"
                                            size={30}
                                            color={"#ff0000ad"}
                                        />
                                    </TouchableOpacity>
                                </HStack>
                            </HStack>
                        )}
                        keyExtractor={(item) => item._id}
                    />
                )}
            </VStack>
        </Stack>
    );
};

export default Home;
