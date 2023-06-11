import { StyleSheet, Text, View, FlatList } from "react-native";
import { Box, HStack, Spinner, Stack } from "native-base";
import React, { useEffect, useState, useCallback } from "react";
import uuid from "react-native-uuid";
import { Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

export default function Index() {
    const [data, setData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [showLoader, setShowLoader] = useState(false);

    let limit = 10;
    let loadMore = true;

    const fetchData = () => {
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.products.length);
                if (data.products.length == 0) {
                    loadMore = false;
                }
                setData((pre) => [...pre, ...data.products]);
                setSkip((pre) => pre + 10);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderItem = useCallback(
        ({ item, index }) => {
            return (
                <Box key={uuid.v4()}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={styles.image}
                    />
                    <HStack justifyContent={"space-between"}>
                        <Text>{item.brand}</Text>
                        <Text>Price {item.price}</Text>
                    </HStack>
                    <Text> {item.description}</Text>
                </Box>
            );
        },
        [data]
    );
    const keyExtractor = useCallback(() => `${uuid.v4()}`);
    const itemSeparatorComponent = useCallback(() => {
        return <View style={{ height: 20 }}></View>;
    });
    const listFooterComponent = useCallback(() => {
        return (
            <Stack mx="10">
                <Spinner size="lg" />
            </Stack>
        );
    });
    const onEndReached = () => {
        if (loadMore) {
            setShowLoader(true);
            fetchData();
        } else {
            setShowLoader(false);
        }
    };

    return (
        <Box style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={keyExtractor}
                renderItem={renderItem}
                onEndReached={onEndReached}
                ItemSeparatorComponent={itemSeparatorComponent}
                ListFooterComponent={showLoader && listFooterComponent}
                contentContainerStyle={styles.flatStyle}
            />
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    image: {
        height: height / 5,
        width: width - 20,
        borderRadius: 10,
    },
    flatStyle: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24,
    },
});
