import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserContext } from "../userContext.js";

const ContextScreen02 = () => {
  const { user, setUser } = useUserContext();

  const setNewUserAge = () => {
    setUser((pre) => {
      return {
        ...pre,
        age: "30",
      };
    });
  };

  return (
    <View>
      <Text>Age : {user.age}</Text>
      <Text onPress={setNewUserAge}>Set New Age </Text>
    </View>
  );
};

export default ContextScreen02;

const styles = StyleSheet.create({});
