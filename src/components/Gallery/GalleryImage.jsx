import React from 'react'

const GalleryImage = (props) => {
    return (
        <div className='galleryImage'>
            <img src={props.image} alt='gallryImage'></img>
            <div className='overlay'>
                <div className='overlayText'>{props.desc}</div>
            </div>
        </div>
    )
}

export default GalleryImage
