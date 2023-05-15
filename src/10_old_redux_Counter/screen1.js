import { Stack, Text, Box } from "native-base";
import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { decrement, fetchData, increment } from "./action";
import { ScrollView } from "react-native";
import { fetchPost } from "./API_ACTION_FUNCTION";

const Screen1 = (props) => {
    // With Out Hook
    const {
        increment: WH_increment,
        decrement: WH_decrement,
        value: WH_value,
    } = props;

    // With Hook
    const value = useSelector((state) => state.value);
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Stack flex={"1"} justifyContent={"center"} alignItems={"center"}>
                {/* With Hoo */}
                <Text>With Hook</Text>
                <Text>Count {value}</Text>
                <Text onPress={() => dispatch(increment())}>Increment</Text>
                <Text onPress={() => dispatch(decrement())}>Decrement</Text>

                <Text onPress={() => dispatch(increment(5))}>
                    Increment With Value
                </Text>
                <Text onPress={() => dispatch(decrement(2))}>
                    Decrement With Value
                </Text>

                {/* With Out Hoo */}
                <Text>With Out Hook</Text>
                <Text>Count {WH_value}</Text>
                <Text onPress={() => WH_increment()}>Increment</Text>
                <Text onPress={() => WH_decrement()}>Decrement</Text>
                <Text onPress={() => WH_increment(5)}>
                    Increment With Value
                </Text>
                <Text onPress={() => WH_decrement(2)}>
                    Decrement With Value
                </Text>

                {/* Handle Async Task */}
                <Text>Handle Async Task</Text>
                <Text onPress={() => dispatch(fetchData())}>Get Data</Text>
                {posts?.map((data) => (
                    <Box key={data.id}>
                        <Text>{data.id}</Text>
                        <Text>{data.title}</Text>
                    </Box>
                ))}

                {/* Reusable Middleware handle and using thunk  */}
                <Text>Reusable Middleware handle</Text>
                <Text onPress={() => dispatch(fetchPost)}>Get Post</Text>
            </Stack>
        </ScrollView>
    );
};

// With out hook
const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {
        value: state.value,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
        // fetchData: (value) => dispatch(fetchData(value)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

// export default Screen1;
