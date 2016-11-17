import React from 'react'
import THREE from 'three'
console.log('THREE=', THREE)

import { Renderer, Camera, Scene } from 'react-threejs'
import Cube from '../components/Cube'

export default class AppContainer extends React.Component{
    constructor() {
        super()

        
    }
    render() {
        return (
            <Renderer size={{width: window.innerWidth, height: window.innerHeight}}>
                <Camera />
                <Scene>
                    <Cube />
                </Scene>
            </Renderer>
        )
    }
}

