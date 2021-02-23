import React from 'react'

class ClickablePicture extends React.Component{
    state = {
        clicked: false,
    }

    clickHandler = () => {
        this.setState((state, props) => ({
          clicked: !state.clicked
        }))
      }

    render() {
    return (
        <div>
        <img onClick={this.clickHandler} src={this.state.clicked ? `./img/persons/maxence-glasses.png` : './img/persons/maxence.png'} alt='logo'/>
        </div>
    )
    }
}

export default ClickablePicture;
