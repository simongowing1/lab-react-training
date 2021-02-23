import React from 'react'

let numbers = []


class NumbersTable extends React.Component {
    state = {
        numbers: []
    }
}

render() {
    return(
        <div>
        <ul>
            <li>this.props.limit</li>
        </ul>
        </div>
    )
}

export default NumbersTable