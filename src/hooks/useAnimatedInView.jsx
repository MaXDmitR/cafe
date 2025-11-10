import { useState, useEffect, useRef, useMemo } from 'react'
import { useInView } from 'react-intersection-observer'


export const useAnimatedInView = ({
    direction = 'bottom',
    timer = 500,
    threshold = 0.1,
    triggerOnce = true,
    animationSpeed = '1s',
    animationDistance = '30px',
}) => {
    const [activateObserver, setActivateObserver] = useState(false)
    const domRef = useRef(null)

    
    useEffect(() => {
        const t = setTimeout(() => setActivateObserver(true), timer)
        return () => clearTimeout(t)
    }, [])

    const { ref: inViewRef, inView } = useInView({
        threshold,
        triggerOnce,
        skip: !activateObserver,
    })

    
    const setRefs = (el) => {
        domRef.current = el
        inViewRef(el)
    }

    
    const classNames = useMemo(() => {
        let base = 'fadeIn'
        base += ` ${direction}`
        if (inView) base += ' visible'
        return base
    }, [direction, inView])

    useEffect(() => {
        if (domRef.current) {
            domRef.current.style.setProperty('--animationSpeed', animationSpeed)
            domRef.current.style.setProperty('--animationDistance', animationDistance)
        }
    }, [animationSpeed, animationDistance])

    return { ref: setRefs, inView, classNames }
}
