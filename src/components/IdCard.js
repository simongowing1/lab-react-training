import React from 'react'

function IdCard(props) {
    return (
        <div>
            <h1>Id Card</h1>
            <p>last name: {props.lastName}</p>
            <p>first name: {props.firstName}</p>
            <p>gender: {props.gender}</p>
            <p>height: {props.height}</p>
            <p>Date of Birth:{props.birth.toLocaleDateString()}</p>
        </div>
    )
}


export default IdCard;