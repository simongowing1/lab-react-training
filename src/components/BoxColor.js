import React from 'react'

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

const BoxColor = (props) => {

    const hex = rgbToHex(props.r,props.g,props.b)   
    const colour = {
        backgroundColor: `rgb(${props.r},${props.g},${props.b})`,
    }

    return(

        <div style={colour}>
            <h2>
                rgb({props.r},{props.g},{props.b})
                <br></br>
                {hex}
            </h2>
        </div>
    )

}

export default BoxColor;