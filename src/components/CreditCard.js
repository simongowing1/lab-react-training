import React from 'react' 
const CreditCard = (props) => {
    
    const colour = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }
    
    let image;
    switch (props.type) {
        case 'Visa':
          image = `./img/visa.png`;
          break;
        case 'Master Card':
            image = `./img/master-card.svg`;
            break;
      }
      
    return (
        <div style={colour}>
            <img src={image} alt='logo'/>
            <p>{'*'.repeat((props.number).length-4)}{props.number.slice(props.number.length-4)}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    )
}


export default CreditCard;