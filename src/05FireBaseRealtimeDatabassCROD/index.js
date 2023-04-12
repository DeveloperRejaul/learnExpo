import { Text, View } from "react-native";
import React from "react";
import app from "./config";
import {
  getDatabase,
  ref,
  onValue,
  set,
  update,
  remove,
} from "firebase/database";

export default function FirebaseRealTimeDataBase() {
  /**
   * @NOTE : specific kono data opor operation calate hule  : ref e collation name er "/" diye index ta diye dite hube
   * @example : ref(db, "collationName/index")
   */

  //TODO function [GET] data to firebase realtime database
  const getData = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "fastfood");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  };

  //TODO function [CREATE] data to firebase realtime database
  const createData = () => {
    const db = getDatabase(app);
    const dbRef = ref(db, "fastfood/1");
    set(dbRef, { id: "1", name: "rejaul", age: "20" });
  };

  //TODO function [UPDATE] data to firebase realtime database
  const updateData = () => {
    const db = getDatabase(app);
    const index = 0;
    const refData = "fastfood/" + index;
    const dbRefForUpdate = ref(db, refData);
    update(dbRefForUpdate, { name: "kamal Mia" });
  };

  //TODO function [DELETE] data to firebase realtime database
  const deleteData = () => {
    const db = getDatabase(app);
    const index = 0;
    const refData = "fastfood/" + index;
    const dbRefForDelete = ref(db, refData);
    remove(dbRefForDelete);
  };

  return (
    <View>
      <Text onPress={getData}> Get Data </Text>
      <Text onPress={createData}>Create Data </Text>
      <Text onPress={updateData}>Update Data </Text>
      <Text onPress={deleteData}>Delete Data </Text>
    </View>
  );
}
