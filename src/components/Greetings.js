import React from 'react'

const Greetings = (props) => {
    let greet;
    switch (props.lang) {
        case 'de':
            greet = 'Hallo';
            break;
        case 'en':
            greet = 'Hello';
            break;
        case 'es':
            greet = '';
            break;
        case 'fr':
            greet = 'Bonjour';
            break;
    }
    return (
        <div>
            <h2>
                {greet},&nbsp;
                {props.children}
            </h2>
        </div>
    )
}

export default Greetings;