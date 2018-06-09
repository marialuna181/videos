import React from 'react'

const VideoListItem = ({video,changeCurrentVideo}) => (
    <div style={{border:'1px solid #000' , padding:'10px', margin:'10px',width:'400px', borderRadius:'5px'}} onClick={()=>changeCurrentVideo(video.id.videoId)} >
        <h3>{video.snippet.title}</h3>
        <img style={{width:100, height:100}} src={video.snippet.thumbnails.default.url} alt="" />
        {/* <div style={{width:100, height:100, background:'#F33'}} >  </div> */}
    </div>
)

export default VideoListItem