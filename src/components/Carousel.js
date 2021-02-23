import React from 'react'



class Carousel extends React.Component{
    state = {
        index: 0
    }

    rightClickHandler = () => {
        if(this.state.index < 3) {
        this.setState((state, props) => ({
            index: state.index + 1
        }))
    }

    if(this.state.index === 3) {
        this.setState((state, props) => ({
            index: 0
        }))
    }

      }
    
    leftClickHandler = () => {
        if(this.state.index > 0) {
            this.setState((state, props) => ({
                index: state.index - 1
            }))
        }

        if(this.state.index === 0){
        this.setState((state, props) => ({
            index: 3
        }))
    }
      }

    render() {
    return (
        <div>
        <a onClick={this.leftClickHandler}>left</a>
        <img src={this.props.imgs[this.state.index]} alt='portrait'/>
        <a onClick={this.rightClickHandler}>right</a>
        </div>
    )
    }
}
export default Carousel