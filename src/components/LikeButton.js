import { buildQueries } from '@testing-library/react';
import React from 'react'

class LikeButton extends React.Component{
    state = {
        likes: 0,
        // backgroundColor: 'blue'
    }

    clickHandler = () => {
        console.log('click');
        this.setState((state, props) => ({
            likes: state.likes + 1
        }))
    }

    render() {
    return (
        <div>
        <a onClick={this.clickHandler}>Likes: {this.state.likes}</a>
        </div>
    )
    }
}

export default LikeButton;