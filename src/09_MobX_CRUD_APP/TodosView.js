import React from "react";
import { AddIcon, Box, Button, Container, HStack, Text } from "native-base";
import { Item, width } from "./Items";
const buttonWidth = 110;

export default function TodosView({ navigation }) {
    return (
        <Container flex={"1"}>
            <Item />

            <Button
                width={buttonWidth}
                left={width - buttonWidth - 10}
                position={"absolute"}
                bottom={"5"}
                borderRadius={10}
                onPress={() => navigation.navigate("Input")}
            >
                <HStack alignItems={"center"}>
                    <Text
                        color={"light.200"}
                        fontSize={"md"}
                        fontWeight={"medium"}
                    >
                        Create
                    </Text>
                    <Box ml={1}>
                        <AddIcon size={4} style={{ color: "#FFF" }} />
                    </Box>
                </HStack>
            </Button>
        </Container>
    );
}
