import React, { Component } from 'react';
import NavBar from './NavBar';
// import Card from './Card'

export class AppTamimi extends Component {
    state = {
        test:  [
            {id:1,name:"exercise video"}
        ]
    }

    render() {
        console.log(this.state.test.name)
        return (
            <>
                <NavBar/>
                {/* <Card/> */}
                {this.state.test.name}
            </>
        )
    }
}

export default AppTamimi
