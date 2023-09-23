import { StyleSheet,Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Video, ResizeMode } from 'expo-av';
import { useRef } from 'react';
import { useSliderContext } from './AutoSlider';
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'
const {width, height} = Dimensions.get("screen")

export default function VideoCom({item}) {
    const video = useRef(null);
   const {setStop} = useSliderContext()
  const [play , setPlay] =  useState(false)

   const handleImageVisibility = visible => {
    if (visible) setStop(true);
    if (visible) setPlay(true);
    if (visible) video.current?.setPositionAsync(0)
  }
  const handlePlayState = (videoState)=>{ if(videoState.didJustFinish)setStop(false)}
   
  return (
    <VisibilitySensor onChange={handleImageVisibility}>
     <Video
        style={styles.img}
        ref={video}
        source={{ uri:item.uri}}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={handlePlayState}
        shouldPlay={play}
    />
    </VisibilitySensor>
  )
}

const styles = StyleSheet.create({
    img:{width: width,height:height/3}
})