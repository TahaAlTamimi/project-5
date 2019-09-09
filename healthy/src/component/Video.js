import React, { Component } from 'react'


export class Video extends Component {
    state = {

    }

    render() {
        return (
            <>
            <div className="row ">
                <div className="card mb-4 shadow-lg col-md-6">
                    <div className="card-body">
                    <h4 className="text-center mb-4" >{this.props.vid.snippet.title}</h4 >
                <iframe width="560" height="315" title="show" src= {`//www.youtube.com/embed/${this.props.vid.id.videoId}`}  allowFullScreen ></iframe>
                <p className="text-center mb-4">{this.props.vid.snippet.description}</p>

                    </div>

               
                </div>
            
            </div>
           
            </>
        )
    }
}

export default Video
