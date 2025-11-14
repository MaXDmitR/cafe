import React from 'react';
import { useAnimatedInView } from '../../hooks/useAnimatedInView';


const TitleCarousel = () => {

    const { ref, classNames } = useAnimatedInView({})

    return (
        <div ref={ref} id="storyTitleCarousel" className={`carousel slide carousel-fade ${classNames}`} data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#storyTitleCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" style={{ backgroundImage: "url('https://res.cloudinary.com/daiacamks/image/upload/f_auto/unnamed_11_sacrsy.jpg')" }}>
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('https://res.cloudinary.com/daiacamks/image/upload/f_auto/unnamed_7_tq1xq6.jpg')" }}>
                </div>
                <div className="carousel-item" style={{ backgroundImage: "url('https://res.cloudinary.com/daiacamks/image/upload/f_auto/unnamed_8_qgtnqc.jpg')" }}>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#storyTitleCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#storyTitleCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default TitleCarousel