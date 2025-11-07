import React, { useRef, useEffect } from 'react'

const GalleryImage = (props) => {

    const titleRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {

                        entry.target.classList.add('visible')
                        observer.unobserve(entry.target)
                    }
                })
            }
            , { threshold: 0.01 })

        observer.observe(titleRef.current)

    }, [])


    return (
        <div className='galleryImage fadeIn' ref={titleRef}>
            <img src={props.image} alt='gallryImage'></img>
            <div className='overlay'>
                <div className='overlayText'>{props.desc}</div>
            </div>
        </div>
    )
}

export default GalleryImage
