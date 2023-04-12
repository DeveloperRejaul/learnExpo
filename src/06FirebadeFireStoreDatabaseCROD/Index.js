import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import app from "./config";

export default function FireBaseStore() {
  // TODO [GET] firestore Data
  const getData = async () => {
    const db = getFirestore(app);
    const testRef = doc(db, "test", "oAwICvjeYg74EgfNBQKE");
    const docSnap = await getDoc(testRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // TODO [CREATE] firestore Data
  const createData = async () => {
    const db = getFirestore(app);
    await setDoc(doc(db, "test", "1"), {
      id: "1",
      name: "kamal Mia",
      age: "30",
    });
  };

  // TODO [UPDATE] firestore data
  const updateData = async () => {
    const db = getFirestore(app);
    const updateRef = doc(db, "test", "1");
    await updateDoc(updateRef, {
      name: "jamal vai",
    });
  };

  // TODO [DELETE] firestore data
  const deleteData = async () => {
    const db = getFirestore(app);
    await deleteDoc(doc(db, "test", "1"));
  };

  return (
    <View>
      <Text onPress={getData}>GET DATA</Text>
      <Text onPress={createData}>Create DATA</Text>
      <Text onPress={updateData}>Update DATA</Text>
      <Text onPress={deleteData}>Delete DATA</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
