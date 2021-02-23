import React from 'react'

const colour = {
    backgroundColor: 'darkblue',
    color: 'white'
}

const DriverCard = (props) => {
    return(
        <div style={colour}>
            <h2>{props.name}</h2>
            <p>{'★'.repeat(Math.floor(props.rating))}{'☆'.repeat(5 - (Math.floor(props.rating)))}</p>
            <p>{props.car.model} - {props.car.licensePlate}</p>
        </div>
    )
}

export default DriverCard;