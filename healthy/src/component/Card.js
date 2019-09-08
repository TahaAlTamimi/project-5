import React, { Component } from 'react'


export class Card extends Component {
    state= {
      test:  [
            {id:1,name:"exercise video"}
        ]
    }

    render() {
        console.log(this.state.test.name)
        return (
            <>
            {/* {this.state.test.name}     */}
            </>
        )
    }
}

export default Card
