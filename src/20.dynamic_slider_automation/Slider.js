import { StyleSheet, Text, View,FlatList,Dimensions ,Image} from 'react-native'
import React from 'react'
import { data } from './data'
import { useRef } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSliderContext } from './AutoSlider'
import Video from './Video'
const  {width,height}= Dimensions.get("screen")

let interval;
export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [position, setPosition] = useState("");

    const slider =  useRef()
    const {stop, setStop} = useSliderContext()
    
    useEffect(()=>{
            interval = setInterval(() => {
                slider.current.scrollToIndex({
                    index:activeIndex === data.length-1?0: activeIndex+1,
                    animation:true,
                })
            }, 2000);
        if (stop) clearInterval(interval)
        return ()=> clearInterval(interval)
    });


    const onScroll = (event)=>{
        const scrollPosition = event.nativeEvent.contentOffset.x;
        setPosition(scrollPosition)
        const  currentIndex = Math.ceil(scrollPosition / width);
        setActiveIndex(currentIndex);  
    }

  return (
    <View >
        <FlatList 
            ref={slider}
            getItemLayout={(data, index)=>({ length:width, offset:width*index, index })}
            onScroll={onScroll}
            pagingEnabled
            horizontal
            data={data}
            keyExtractor={(item)=>item.id}
            renderItem={({item,index})=>  { 
                if (item.type === "image") return <Image source={{uri:item.uri}} style={styles.img}/>
                if (item.type === "video") return <Video item={item} position={position} />
            }}
        />
        <Text onPress={()=>setStop(true)}>Stope </Text>
    </View>
  )
}





const styles = StyleSheet.create({
    img:{width: width,height:height/3, borderRadius:10}
})