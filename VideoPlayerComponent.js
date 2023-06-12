import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VideoPlayer from 'expo-video-player'
const VideoPlayerComponent = () => {
  return (
    <View>
<VideoPlayer
  videoProps={{
    shouldPlay: true,
    // ❗ source is required https://docs.expo.io/versions/latest/sdk/video/#props
    source: {
      uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  }}
/>
    </View>
  )
}

export default VideoPlayerComponent

const styles = StyleSheet.create({})