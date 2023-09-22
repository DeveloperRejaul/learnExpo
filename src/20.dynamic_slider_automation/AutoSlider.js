import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from './Slider'
import { createContext } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import VideoCom from './Video';


const Context = createContext();

export default function AutoSlider() {
const [stop, setStop] =  useState(false)

  return (
    <Context.Provider value={{stop, setStop}}>
      <Slider/>
    </Context.Provider>
  )
}

 
export const useSliderContext = ()=> useContext(Context)