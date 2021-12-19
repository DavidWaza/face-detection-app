import React from 'react';
import './imageLinkForm.css'

 const imageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 center'>
                {'This Magic Brain will detect faces in your pictures'}
            </p>
            <div className='center'>
                <div className='form pa4 br3 shadow-5'>
                <input type="text" className='f4 pa2 w-70' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>{'Detect'}</button>
                </div>
            </div>
        </div>
    )
}
export default imageLinkForm;
