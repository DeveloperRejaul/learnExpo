import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'
import YoutubePlayer from "react-native-youtube-iframe";
import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'
import { useSliderContext } from './AutoSlider';
const {height, width} =Dimensions.get('screen')
export default function YoutubeCom({item}) {

    const {setStop} =  useSliderContext()
    const [play, setPlay] = useState(false);
   const youtube =  useRef(null)

    const handleImageVisibility = (visible)=>{
        if (visible)setStop(true)
        if (visible) youtube.current?.seekTo(0);
        if (visible)setPlay(true);
    }

    const handleOnchangeState = (s)=>{
        if (s === "ended") setStop(false)
        if (s === "ended") setPlay(false)
    }


  return (
    <VisibilitySensor  onChange={handleImageVisibility} >
      <YoutubePlayer
        ref={youtube}
        height={height/3}
        width={width}
        play={play}
        initialPlayerParams={{loop:play}}
        videoId={item.uri}
        onChangeState={handleOnchangeState}
        forceAndroidAutoplay={play}
      />
    </VisibilitySensor>
  )
}

const styles = StyleSheet.create({})
