import React from "react";

import PropTypes from 'prop-types';

function Photo(props) {
     const frame = props.finalPhoto;
    return (
        <figure className="figure">
            <img className="photo" src={frame.imageLink} alt={frame.description} />
            <figcaption><p>{frame.description}</p></figcaption>
            <div className="button-container">
                <button className="remove-button" onClick={
                    () => {
                        props.OnremovePhoto(frame)
                    }
                }>Remove</button>
            </div>
        </figure>

    );
    
}

Photo.propType ={
    OnremovePhoto: PropTypes.func.isRequired,
    finalPhoto: PropTypes.object.isRequired,
    
}

export default Photo