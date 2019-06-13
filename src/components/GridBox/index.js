import React, {Component} from 'react';

class GridBox extends Component{
    style = {
        height: "60px",
        width: "60px",
        borderColor: "red",
        borderWidth: "5px",
        borderStyle: "solid",
        display: "inline-block"
    }

    render () {
        return (
            <div id = {this.props.id} onClick = {this.props.clicked} style = {this.style}>
                
            </div>
        )
    }
}

export default GridBox;