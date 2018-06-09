import React from 'react'
const video = "http://www.youtube.com/embed/"
const VideoDetail = (currentVideo) =>(
    <iframe style={{width:'50%', height:'350px', margin:'0 0 0 10px', display:'inline-block'}} src={video+currentVideo}></iframe>
)

export default VideoDetail