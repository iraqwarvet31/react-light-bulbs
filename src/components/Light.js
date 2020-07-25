import React, { Component } from 'react'

import lightOff from '../imgs/light-off.png'
import lightOn from '../imgs/light-on.png'

class Light extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          isToggleOn: true
        }
    }
    
    flipSwitch = () => {
        // console.log(this.state) // refers to previous state
        this.setState(prevState => {
            console.log(prevState) // refers to previous state
            return ({
            isToggleOn: !prevState.isToggleOn
            })
        }, () => console.log(this.state)) // refers to updated state
    }

    render() {
        
        if (this.state.isToggleOn) {
            return (
            <div>
                <img 
                src={ lightOff } 
                className='bulb-off' 
                alt='Light bulb turned off' 
                onClick={ this.flipSwitch }
                />
            </div>
            )   
        } else {
            return (
            <div>
                <img 
                src={ lightOn } 
                className='bulb-off' 
                alt='Light bulb turned off' 
                onClick={ this.flipSwitch }
                />
            </div>
            )
            
        }
    }
}

export default Light