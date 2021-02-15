import React from "react";
import Photo from './Photo';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Route } from 'react-router-dom';

function  Photoframe(props) {
    return (
        <div>
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photo-grid">
                {props.PhotoPart.sort(function (x, y) {
                    return y.id - x.id
                })
                    .map((singlePhoto, index) => <Photo key={index} OnremovePhoto={props.OnremovePhoto} finalPhoto={singlePhoto} />)}
            </div>
        </div>
    ); 
    
}
Photoframe.propTypes = {
    PhotoPart: PropTypes.array.isRequired,
    OnremovePhoto:PropTypes.func.isRequired,
}

export default Photoframe;