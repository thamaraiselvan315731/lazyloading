

import React, { Component } from 'react';
var i = true;
export default class AvatarComponent extends Component {

    method = () => {
        i = !i;
        this.props.func(i)
    }

    render() {
        return (
            < div >
                <h1 onClick={this.method}> Click here to load....</h1>
            </div >
        )
    }
}

//export default AvatarComponent;