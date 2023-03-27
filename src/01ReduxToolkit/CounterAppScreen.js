import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  decrementByValue,
  incrementByValue,
} from "./features/counterSlice.js";
import { handleLogin, handleLogOut } from "./features/authSlice.js";

export default function CounterAppScreen() {
  const countValue = useSelector((state) => state.counter.value);
  const authValue = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  console.log(authValue);

  return (
    <View>
      <Text>{countValue}</Text>
      <Text onPress={() => dispatch(increment())}>Increment</Text>
      <Text onPress={() => dispatch(decrement())}>decrement</Text>
      <Text onPress={() => dispatch(incrementByValue(5))}>
        increment by value
      </Text>
      <Text onPress={() => dispatch(decrementByValue(5))}>
        decrement by value
      </Text>

      {/* Auth state test */}
      <Text onPress={() => dispatch(handleLogin())}>Login</Text>
      <Text onPress={() => dispatch(handleLogOut())}>LogOut</Text>
      <Text>Is Loging: {authValue ? "true" : "false"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
