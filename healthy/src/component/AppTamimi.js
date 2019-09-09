import React, { Component } from 'react';
import axios from 'axios'
import NavBar from './NavBar';
import Card from './Card'

export class AppTamimi extends Component {
    state = {
        videos:  [
        ]
    }

    // componentDidMount() {
    //     axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=healthy sports&type=video&key=AIzaSyDJfV4Io9lIg28IVDUllIywSI1_v6qWwSk`)
    //         .then(res => {
    //             console.log(res.data.items);
    //             this.setState({
    //                 videos: res.data.items

    //             }
    //             )
    //             console.log(this.state.videos[0].id.kind)
    //         })
    //         .catch(err => console.log(err))

    // }

    render() {
        // console.log(this.state.test[0].name)
        return (
            <>
                <NavBar/>
                <Card />
            
                {/* {this.state.test[0].name} */}
            </>
        )
    }
}

export default AppTamimi
