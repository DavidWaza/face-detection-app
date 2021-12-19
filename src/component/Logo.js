import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'
import brain from '../img/brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner tc pa3"><img src={brain} alt='brain' style={{paddingTop: '30px'}}></img></div>
            </Tilt>
        </div>
    )
}
export default Logo;
