import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSliderContext } from './AutoSlider';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'
const {width, height} = Dimensions.get("screen")

export default function VideoCom({item,position}) {
    const video = useRef(null);
   const {setStop} = useSliderContext()

   const handleImageVisibility = visible => {
    if (visible) {
      setStop(true)
    }
  }

    const handlePlayState = (videoState)=>{
console.log(videoState.didJustFinish);
    }
    
  return (
    <VisibilitySensor onChange={handleImageVisibility}>
     <Video
        style={styles.img}
        ref={video}
        source={{ uri:item.uri}}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={handlePlayState}
        shouldPlay
        isLooping
    />
    </VisibilitySensor>
  )
}

const styles = StyleSheet.create({
    img:{width: width,height:height/3}
})