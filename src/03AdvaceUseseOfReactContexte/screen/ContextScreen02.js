import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserContext } from "../userContext.js";

const ContextScreen02 = () => {
  const { state, dispatch } = useUserContext();

  return (
    <View>
      <Text>Age : {state.age}</Text>
      <Text
        onPress={() => dispatch({ type: "change_user_age", payload: "50" })}
      >
        Set New Age
      </Text>
    </View>
  );
};

export default ContextScreen02;

const styles = StyleSheet.create({});
