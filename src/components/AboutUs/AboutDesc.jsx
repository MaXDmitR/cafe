import React, { useEffect, useRef, useState } from 'react'
import ReadMoreButton from './ReadMoreButton'
import { useInView } from 'react-intersection-observer'

const AboutDesc = () => {
    /*const titleRef = useRef(null)

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
            , { threshold: 0.1 })

        observer.observe(titleRef.current)

    }, [])*/

    const [activateObserver, setActivateObserver] = useState(false)
    const [animationDirection] = useState('right')

    const domRef = useRef(null);

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
        domRef.current = el; 
        inViewRef(el); 
        
    };
    
    useEffect(() => {
        
        if (domRef.current) { 
            domRef.current.style.setProperty('--animationSpeed', '1s');
            domRef.current.style.setProperty('--animationDistance', '500px');
            
        }
    }, []);

    return (
        <div className="aboutDesc" >

            <h1 className={`aboutTitle fadeIn ${animationDirection} ${inView ? 'visible' : ''}`} ref={setRefs}>About us</h1>

            <p><strong>AromaPlace</strong> is a cosy, family-friendly coffee shop created with love and inspired by our community. We wanted to create a space where you would feel at home: a place where <strong>real coffee</strong>, nutritious food and sincere communication come together.</p>

            <p>We serve fresh <strong>organic Fair Trade certified coffee</strong> made from <strong>locally roasted beans</strong>. Our menu includes freshly baked croissants every morning and pastries from local bakers.</p>

            <p>Everything we offer is based on our values: <strong>warmth, creativity and stability</strong>. </p>

            <h3>A family business. Created with love.</h3>

            <p>There is always something fresh to <strong>enjoy</strong>. Whether it's our signature espresso drinks or a cosy cup of tea, we guarantee you'll leave satisfied.</p>

            <ReadMoreButton></ReadMoreButton>
            <blockquote class="aboutQuote">
                “We don’t just serve coffee — we serve warmth, inspiration and connection.”
                <span>– The AromaPlace Family</span>
            </blockquote>

        </div>
    )
}

export default AboutDesc
