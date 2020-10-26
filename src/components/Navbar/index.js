import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';

export default class Navbar extends Component {
    render() {
        return (
            <AppBar style={{ position: 'fixed', top: 0 , left : 0,  margin: 0}}>
             <h1>Soccer Highlights App</h1>   
             </AppBar>
            
        )
    }
}
