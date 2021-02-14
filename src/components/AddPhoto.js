import React, { Component } from "react";


class AddPhoto extends Component{
    constructor() {
        super()
        this.handleSubmit= this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imagelink= (event.target.elements.link.value)
        const imagedescription= (event.target.elements.description.value)
        
    }
    render() {
        return (
            <div>
                <h1>Add Photo</h1>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" placeholder="link" name="link"></input>
                    <input type="text" placeholder="Description" name="description"></input>
                    <button className="Add-button">Add</button>
                </form>
            </div>
            
        );
    }
}





export default AddPhoto;