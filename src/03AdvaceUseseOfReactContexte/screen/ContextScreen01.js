import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserContext } from "../userContext.js";

export default function ContextScreen01() {
  const { state, dispatch } = useUserContext();

  return (
    <View>
      <Text>User Name : {state.name}</Text>
      <Text
        onPress={() => {
          dispatch({ type: "change_user_name", payload: "Kamal Mia" });
        }}
      >
        Set new user
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
