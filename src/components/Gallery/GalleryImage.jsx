import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { useAnimatedInView } from '../../hooks/useAnimatedInView'

const GalleryImage = (props) => {
   /* const [activateObserver, setActivateObserver] = useState(false)
    const [animationDirection] = useState('bottom')

    const domRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => setActivateObserver(true), 500)
        return () => clearTimeout(timer)
    }, [])

    const { ref: inViewRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        skip: !activateObserver
    })

    const setRefs = (el) => {
        domRef.current = el
        inViewRef(el)
    }

    
    const classNames = useMemo(() => {
        let base = 'fadeIn'
        base += ` ${animationDirection}`
        if (inView) base += ' visible'
        return base
    }, [animationDirection, inView])


    useEffect(() => {
        if (domRef.current) {
            domRef.current.style.setProperty('--animationSpeed', '1s')
            domRef.current.style.setProperty('--animationDistance', '30px')
        }
    }, [])*/


    const { ref, classNames } = useAnimatedInView({
        direction: 'bottom',
        timer: 500,
        threshold: 0.1,
        triggerOnce: true,
        animationSpeed: '1s',
        animationDistance: '30px'
    })

    return (
        <div ref={ref} className={`galleryImage ${classNames}`}>
            <img loading="lazy" src={props.image} alt="galleryImage" />
            <div className="overlay">
                <div className="overlayText">{props.desc}</div>
            </div>
        </div>
    )
}

export default GalleryImage
