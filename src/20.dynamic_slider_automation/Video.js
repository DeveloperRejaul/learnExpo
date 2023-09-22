import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSliderContext } from './AutoSlider';
const {width, height} = Dimensions.get("screen")

export default function VideoCom({item,position}) {
    const video = useRef(null);
   const {setStop} = useSliderContext()


   useEffect(()=>{
    console.log(Math.ceil(position/width));
   })

    const handlePlayState = (s)=>{}
    
  return (
     <Video
        style={styles.img}
        ref={video}
        source={{ uri:item.uri}}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={handlePlayState}
    />
  )
}

const styles = StyleSheet.create({
    img:{width: width,height:height/3}
})