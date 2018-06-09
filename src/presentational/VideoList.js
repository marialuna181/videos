import React from 'react'
import VideoListItem from './VideoListItem'

const VideoList = ({videos, changeCurrentVideo}) =>{
    return(
        <div  style={{display:'inline-block', verticalAlign:'top'}}>{videos.map((video, index)=>
            <VideoListItem 
            key={index} 
            changeCurrentVideo={changeCurrentVideo} 
            video={video} />
        )}</div>
    )
}

export default VideoList