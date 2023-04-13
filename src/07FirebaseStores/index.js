import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { firebase, app } from "./config";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

export default function index() {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);
    };

    const uploadImage = async () => {
        setUploading(true);
        const response = await fetch(image.uri);
        const blob = await response.blob();
        const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);

        const storage = getStorage(app);
        const storageRef = ref(storage, filename);
        const uploadTask = uploadBytesResumable(storageRef, blob);
        // const ref = firebase.storage().ref().child(filename).put(blob);

        try {
            await uploadTask;
        } catch (e) {
            console.log(e);
        }
        setUploading(false);
        Alert.alert("Photo uploaded ");
        setImage(null);
    };
    return (
        <View>
            {image && (
                <Image
                    source={{ uri: image.uri }}
                    style={{ width: 200, height: 200 }}
                />
            )}
            <Text onPress={uploadImage}>Upload Image</Text>
            <Text onPress={pickImage}>Pick Image</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
