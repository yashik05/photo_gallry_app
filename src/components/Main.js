import React, { Component } from 'react';
import Title from './Title'
import Photoframe from "./photoframe";
import AddPhoto from "./AddPhoto";
import '../styles/stylesheet.css';
import { Route } from 'react-router-dom';


class Main extends Component{
    constructor() {
        super()
        this.state = {
            allPhotos: [{
                id: "0",
                description: "beautiful sea",
                imageLink: "https://picsum.photos/800/600?image=14"
            }, {
                    id: "1",
                    description: "Coffee cup",
                    imageLink: "https://picsum.photos/800/600?image=30"
                }, {
                    id: "2",
                    description: "Freedom",
                    imageLink: "https://picsum.photos/800/600?image=50"
                }, {
                    id: "3",
                    description: "Farm",
                    imageLink: "https://picsum.photos/800/600?image=85"
                }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }
    removePhoto(PhotoRemoved) {
        console.log(PhotoRemoved.description)
        this.setState((state) => ({
            allPhotos: state.allPhotos.filter((photo) => photo !== PhotoRemoved )
        }))
    }
    render() {
        return (<div>
            <Route exact path="/" render={() => (
                <div>
                    <Title />
                    <Photoframe PhotoPart={this.state.allPhotos} OnremovePhoto={this.removePhoto} />
                </div>        
            )} />
            <Route exact path="/AddPhoto" render={() => (
                <div>
                    <AddPhoto />
                </div>
            )}/>
             
           
        </div>);
    }
}


export default Main;