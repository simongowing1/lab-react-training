import React from 'react'
//import masterCard from 'master-card.svg'
const CreditCard = (props) => {
    
    const colour = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    
    /*
    let image;
    switch (props.type) {
        case 'Visa':
          image = `/public/img/visa.png`;
          break;
        case 'Master Card':
            image = `../public/img/master-card.svg`;
            break;
      }
      */

    return (
        <div style={colour}>
            <img src='#' alt='logo'/>
            <p>{'*'.repeat((props.number).length-4)}{props.number.slice(props.number.length-4)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}


export default CreditCard;