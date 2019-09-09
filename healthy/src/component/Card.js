import React, { Component } from 'react'
import axios from 'axios';
import { async } from 'q';
import VideoShow from './VideoShow';

// let x = 0;

export class Card extends Component {
    state = {

        videos: []

    };

    componentDidMount() {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=workout at home&type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`)
            .then(res => {
                console.log(res.data.items);
                this.setState({
                    videos: res.data.items

                }
                )
                console.log(this.state.videos[0].id.kind)
            })
            .catch(err => console.log(err))
        // x = 1;

    }

    render() {
    //    {this.state.videos.length>0 &&console.log(this.state.videos)}
       
        return (
            <>

        {  this.state.videos.length>0 &&  <VideoShow video={ this.state.videos}/>

                   
  }
        


              {/* {this.state.videos.length>0 &&   <p>{this.state.videos[0].snippet.title}</p> }

              {this.state.videos.length>0 &&   <iframe width="560" height="315" src= {`//www.youtube.com/embed/${this.state.videos[0].id.videoId}`} frameborder="0" allowfullscreen></iframe> }

              {this.state.videos.length>0 &&   <p>{this.state.videos[0].snippet.description}</p> } */}


               
            </>
        )
    }
}

export default Card
