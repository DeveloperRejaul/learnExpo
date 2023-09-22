import { StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react';
import * as SQLite from 'expo-sqlite';
import { useState } from 'react';

export default function Sqlite() {
    const db = SQLite.openDatabase('db.testDb') ;
    const [items, setItems] = useState([])

    // creating  a databases table  
    useEffect(() => {
        db.transaction( (txn)=> {
          txn.executeSql('CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT, count INT)');
        });
      }, []);

    // add data
    const addData = async()=>{
        db.transaction(trx=>{
            trx.executeSql('INSERT INTO items (text, count) values (?, ?)', ["rejaul", 0], 
            (txObj, resultSet)=>{setItems(pre=> [...pre, {id: resultSet.insertId, text: 'rejaul', count: 0}])},
            (txObj, error)=>{console.log(error)}
            )
        })
    };

    // get  data
    const getData = async()=>{
        db.transaction(trx=>{
            trx.executeSql('SELECT * FROM items', null,
            (txObj, { rows: { _array } }) => setItems(_array)),
            (txObj, error) => console.log('Error ', error)
        })
    };

    // update data
    const updateData = async(id)=>{
        db.transaction(trx=>{
            trx.executeSql('UPDATE items SET count = count + 1 WHERE id = ?',[id], 
            (txObj, resultSet)=>{
                if (resultSet.rowsAffected > 0) {
                    const newItems = items.map(d=>{
                        if (d.id===id) {
                            return {...d, count:2}
                        }else return d;
                    })
                    setItems(newItems);
                }
            }
            )
        })
    };

    // delete name data
    const deleteData = async(id)=>{
        db.transaction(trx=>{
            trx.executeSql('DELETE FROM items WHERE id = ? ', [id],
            (txObj, resultSet)=>{
                if (resultSet.rowsAffected > 0) {
                    const newItems = items.filter(d=>d.id!==id);
                    setItems(newItems);
                }
            }
            )
        })
    };


    // For testing 
    useEffect(() => {
        console.log(items);
    }, [items])

  return (
    <View  style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.text} onPress={addData} >Add Data</Text>
      <Text style={styles.text} onPress={getData} >get Data</Text>
      <Text style={styles.text} onPress={()=>updateData(1)} >update Data</Text>
      <Text style={styles.text} onPress={()=>deleteData(1)} >delete Data</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text:{fontSize:20, backgroundColor:"green", paddingHorizontal:10, paddingVertical:5, marginVertical:5, borderRadius:7}
})