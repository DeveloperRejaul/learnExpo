import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useUserContext } from "../userContext.js";

export default function ContextScreen01() {
  const { user, setUser } = useUserContext();

  const setNewUser = () => {
    setUser((pre) => {
      return {
        ...pre,
        name: "kamal Mia",
      };
    });
  };
  return (
    <View>
      <Text>User Name : {user.name}</Text>
      <Text onPress={setNewUser}>Set new user</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
