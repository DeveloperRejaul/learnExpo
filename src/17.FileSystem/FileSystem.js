import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as FileSystem from 'expo-file-system';


export default function File() {

// download File 
async function downloadFile (){
const imageUrl = "http://192.168.0.102:4000/api/upload/d5196c958aa5410ca838c20907179765.jpg";
 const downloadResumable=  FileSystem.createDownloadResumable(imageUrl,FileSystem.documentDirectory+Date.now()+".jpg", {}, ()=>{});
 const {uri} = await downloadResumable.downloadAsync();
 console.log(uri);
};

// read file
const readDir = async() =>{
 const files = await FileSystem.readDirectoryAsync(FileSystem.documentDirectory);
 console.log(files); // return array of files
}

// delete file 
const deleteFile = async()=>{
 const result = await FileSystem.deleteAsync(FileSystem.documentDirectory+"/1692522185013.jpg");
 console.log(result);
};

// create folder 
const createFolder = async()=>{
  // Checks if gif directory exists. If not, creates it
  const dirInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory+"/new folder");
  if (!dirInfo.exists) {
    console.log("Gif directory doesn't exist, creating...");
    const result =  await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+"/new folder");
    console.log(result);
  }
}


  return (
    <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
      <Text style={styles.btn} onPress={createFolder}>create Dir</Text>
      <Text style={styles.btn} onPress={deleteFile}>delete Dir</Text>
      <Text style={styles.btn} >Edit Dir</Text>
      <Text style={styles.btn} onPress={readDir}>Read Dir</Text>
      <Text style={styles.btn} onPress={downloadFile}>Download File</Text>
    </View>
  )
};







const styles = StyleSheet.create({
  btn:{
    marginVertical:10,
    backgroundColor:"green",
    padding:5,
    color:"#fff",
    paddingHorizontal:10
  }
})