import React , {Component} from 'react'
import VideoSearch from './VideoSearch'
import VideoDetail from '../presentational/VideoDetail'
import VideoList from '../presentational/VideoList'
import search from 'youtube-api-v3-search'

class VideoContainer extends Component{
    state = {
        videos : [],
        currentVideo:null,
        term : ''
    }

    handlerChangeInput =(valor)=>{
        this.setState({
            term: valor
        }, ()=>{
            this.video(this.state.term)
        })
    }

    video = (value) =>{
        const youtubeAPI = 'AIzaSyAthD-YSwACSJr3cApmk0696JdZATMeges'
        const opts = {q:value, type:'videos'}
        search( youtubeAPI, opts).then((data)=>{
            const videos = data.items
            this.setState({
                videos,
                currentVideo : videos[0].id.videoId
            },()=>{
                console.log(this.state.currentVideo)
            })
        })
    }
 
    componentDidMount(){
       this.video()
    }

    changeCurrentVideo=(value)=>{
        console.log('value '+value)
        const currentVideo = this.state.videos.find(video=>video.id.videoId===value)
        this.setState({
            currentVideo
        },()=>{
            alert('Play List: '+this.state.currentVideo.id.playlistId)
        })
    }

    render(){
        return(
            <div>
                <div>
                    <VideoSearch 
                        term={this.state.term}
                        handlerChangeInput={this.handlerChangeInput} />
                </div>
                <div>
                    <VideoDetail currentVideo={this.state.currentVideo}/>
                    <VideoList videos={this.state.videos} changeCurrentVideo={this.changeCurrentVideo} />
                </div>
            </div>
        )
    }

}

export default VideoContainer  