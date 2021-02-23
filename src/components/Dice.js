import React from 'react'


const blankDice = './img/dice-empty.png'

class Dice extends React.Component{
    state = {
            currentImage: `./img/dice${Math.floor(Math.random() * 6)+1}.png` 
    }

    clickHandler = () => {
        this.setState({currentImage: blankDice});
        setTimeout(() => {
            this.setState({currentImage: `./img/dice${Math.floor(Math.random() * 6)+1}.png`})
        }, 1000)
      }

    render() {
    return (
        <div>
        <img onClick={this.clickHandler} src={this.state.currentImage} alt='randomDice'/>
        </div>
    )
    }
}

export default Dice;