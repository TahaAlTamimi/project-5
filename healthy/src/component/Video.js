import React, { Component } from 'react'


export class Video extends Component {
    state = {

    }

    render() {
        return (
            <>
            <h1>{this.props.vid.snippet.title}</h1>
                <iframe width="560" height="315" src= {`//www.youtube.com/embed/${this.props.vid.id.videoId}`} frameborder="0" allowfullscreen ></iframe>
                <p>{this.props.vid.snippet.description}</p>
            </>
        )
    }
}

export default Video
