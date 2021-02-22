import React from 'react'

const IdCard = (props) => {
    return (
        <div>
            <h1>Id Card</h1>
            <p>last name: {props.lastName}</p>
            <p>first name: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.height/100}m</p>
            <p>Date of Birth:{props.birth.toLocaleDateString()}</p>
            <img src={props.picture}/>
        </div>
    )
}


export default IdCard;