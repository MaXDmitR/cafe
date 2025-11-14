import React from 'react'
import { useAnimatedInView } from '../../hooks/useAnimatedInView'


const AboutImage = () => {


const { ref, classNames } = useAnimatedInView({
            direction: 'top',
            timer: 500,
            threshold: 0.4,
            triggerOnce: true,
            animationSpeed: '2s',
            animationDistance: '0'
        })

    return (
        <div
            ref = {ref}
            className={`aboutImage ${classNames}`}
            style={{ backgroundImage: "url(https://res.cloudinary.com/daiacamks/image/upload/f_auto/about_wkbmf5.jpg)" }}
            aria-label="Затишний інтер'єр кав'ярні"
        >
        </div>
    )
}

export default AboutImage
