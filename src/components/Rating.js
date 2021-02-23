import React from 'react'

    const Rating = (props) => {
        return(
            <div>
                <p>{'★'.repeat(Math.floor(props.children))}{'☆'.repeat(5 - (Math.floor(props.children)))}</p>
            </div>
        )
    }

export default Rating;