import React, { Component } from 'react'



export class VideoShow extends Component {
    state = {

    }

    render() {
        console.log(this.props.video)
        return (
            <>
            


              {this.props.video.map((item,index)=>{
                return (
                    <>
                    <h4>{item.snippet.title}</h4>
                            <iframe width="560" height="315" src= {`//www.youtube.com/embed/${item.id.videoId}`} frameborder="0" allowfullscreen key={index}></iframe>
                            <h6>{item.snippet.description}</h6>

                        </> )
              })}
            </>
        )
    }
}

export default VideoShow
