import React, { Component } from "react";
import Photo from './Photo'

class Photoframe extends Component{
    render() {
        return <div className="photo-grid">
            {this.props.PhotoPart.map((singlePhoto,index) => <Photo key={index} finalPhoto={singlePhoto} />)}
        </div>
    }
}

export default Photoframe;